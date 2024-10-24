"use server";

import db from "@/lib/db";
import { revalidateTag } from "next/cache";

interface EditPostProps {
  id: number;
  title: string;
  content: string;
  summary: string;
  preview: string;
}

export async function editPost({
  id,
  title,
  content,
  summary,
  preview,
}: EditPostProps) {
  try {
    const result = await db.post.update({
      where: {
        id,
      },
      data: {
        title,
        description: content,
        summary,
        photo: preview,
      },
      select: {
        id: true,
      },
    });
    revalidateTag("posts");
    return result;
  } catch (e) {}
}

export async function deletePost(id: number) {
  try {
    const result = await db.post.delete({
      where: {
        id,
      },
      select: {
        id: true,
      },
    });
    return result;
  } catch (e) {}
  revalidateTag("posts");
}
