import PostList from "@/components/post/post-list";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { Prisma } from "@prisma/client";
import { unstable_cache as NextCache } from "next/cache";
import Link from "next/link";

import { getUser } from "@/apis/user/actions";
import { getPosts } from "../actions";

const getCachedPosts = NextCache(getPosts, ["posts"], {
  tags: ["posts"],
  revalidate: 60,
});

export const metadata = {
  title: "포스트",
};

export type InitialPosts = Prisma.PromiseReturnType<typeof getPosts>;

export default async function Post() {
  const user = await getUser();
  // const initialPosts = await getCachedPosts();
  const initialPosts = await getPosts();

  return (
    <div className="mt-[80px] flex justify-center">
      <PostList initialPosts={initialPosts} />
      {user?.role === "ADMIN" ? (
        <Link
          href="/post/add"
          className="bg-orange-500 flex items-center justify-center 
  rounded-full size-16 fixed bottom-[90px] right-8 text-white
  transition-colors hover:bg-orange-400 shadow-lg shadow-neutral-800"
        >
          <PencilSquareIcon className="size-9" />
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}
