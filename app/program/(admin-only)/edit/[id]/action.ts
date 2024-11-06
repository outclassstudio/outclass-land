"use server";

import db from "@/lib/db";
import { revalidateTag } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { Prisma } from "@prisma/client";
import { getUploadUrl } from "@/apis/common/actions";
import { programSchema } from "../../add/schema";

export async function editProgram(prevState: any, formData: FormData) {
  const data = {
    title: formData.get("title"),
    price: formData.get("price"),
    description: formData.get("description"),
    photo: formData.get("photo"),
    isOpen: formData.get("isopen") === "공개" ? true : false,
  };

  const parseResult = programSchema.safeParse(data);
  if (!parseResult.success) {
    return parseResult.error.flatten();
  } else {
    const { id } = await db.program.update({
      where: {
        id: prevState,
      },
      data: {
        title: parseResult.data.title,
        description: parseResult.data.description,
        price: parseResult.data.price,
        photo:
          parseResult.data.photo === "/undefined"
            ? undefined
            : parseResult.data.photo,
        isOpen: parseResult.data.isOpen,
      },
      select: {
        id: true,
      },
    });
    revalidateTag("program");
    redirect(`/program/list`);
  }
}

export async function getProgram(id: number) {
  const program = await db.program.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          username: true,
          avatar: true,
        },
      },
    },
  });
  return program;
}

export async function deleteProgram(id: number) {
  try {
    const result = await db.program.delete({
      where: {
        id,
      },
      select: {
        id: true,
      },
    });
    revalidateTag("program");
    return result;
  } catch (e) {
    console.log(e);
  }
}

export type EditProgramType = Prisma.PromiseReturnType<typeof getProgram>;
