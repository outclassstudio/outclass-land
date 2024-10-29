import PostEditForm from "@/components/post/post-edit-form";
import db from "@/lib/db";
import { Prisma } from "@prisma/client";
import { getPost } from "./actions";

export default async function EditPost({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = await getPost(+id);
  return <PostEditForm initialPost={post} />;
}
