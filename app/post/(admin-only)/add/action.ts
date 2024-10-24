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
  const session = await getSession();

  const result = postSchema.safeParse(data);
  if (!result.success) return notFound();

  if (session.id) {
    const post = await db.post.create({
      data: {
        title: result.data.title,
        description: result.data.post,
        photo:
          result.data.photo === "/undefined" ? undefined : result.data.photo,
        summary: result.data.summary,
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

    revalidateTag("posts");
    redirect(`/post/${post.id}`);
  }
}
