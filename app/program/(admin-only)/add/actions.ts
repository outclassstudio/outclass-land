"use server";

import db from "@/lib/db";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";
import { programSchema } from "./schema";

export async function uploadProgram(formData: FormData) {
  const data = {
    title: formData.get("title"),
    price: formData.get("price"),
    description: formData.get("description"),
    photo: formData.get("photo"),
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

      revalidateTag("prodgram");
      redirect(`/program/${program.id}`);
    }
  }
}
