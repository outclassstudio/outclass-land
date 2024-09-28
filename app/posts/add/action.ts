"use server";

import { notFound, redirect } from "next/navigation";
import { postSchema } from "./schema";
import db from "@/lib/db";
import getSession from "@/lib/session";
import { revalidateTag } from "next/cache";

interface PostDataProps {
  title: string;
  post: string;
  photo: string;
}

export async function uploadPost(data: PostDataProps) {
  // const data = {
  //   title: formData.get("title"),
  //   post: formData.get("post"),
  // };

  const session = await getSession();

  const result = postSchema.safeParse(data);
  if (!result.success) return notFound();

  // console.log(result);

  if (session.id) {
    const post = await db.post.create({
      data: {
        title: result.data.title,
        description: result.data.post,
        photo: result.data.photo,
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

    // revalidateTag("posts");
    redirect(`/posts/${post.id}`);
  }
}
