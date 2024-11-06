"use server";

import db from "@/lib/db";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";
import { programSchema } from "./schema";

export async function uploadProgram(formData: FormData) {
  console.log(formData);
  const data = {
    title: formData.get("title"),
    price: formData.get("price"),
    description: formData.get("description"),
    photo: formData.get("photo"),
    isOpen: formData.get("isopen") === "공개" ? true : false,
  };

  //todo schema의 폴더를 변경할 필요가 있음
  const result = programSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const session = await getSession();

    if (session.id) {
      const program = await db.program.create({
        data: {
          title: result.data.title,
          price: result.data.price,
          description: result.data.description,
          photo: result.data.photo,
          isOpen: result.data.isOpen,
          //?이유 확인하기
          user: {
            connect: {
              id: session.id,
            },
          },
        },
        select: {
          id: true,
        },
      });

      revalidateTag("program");
      redirect(`/program`);
    }
    return null;
  }
}
