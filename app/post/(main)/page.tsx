import PostList from "@/components/post/post-list";
import { PencilSquareIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Prisma } from "@prisma/client";
import { unstable_cache as NextCache } from "next/cache";
import Link from "next/link";
import { getUser } from "@/apis/user/actions";
import { getPosts } from "../actions";

// const getCachedPosts = NextCache(getPosts, ["posts"], {
//   tags: ["posts"],
//   revalidate: 60,
// });

export const metadata = {
  title: "포스트",
};

export type InitialPosts = Prisma.PromiseReturnType<typeof getPosts>;

export default async function Post() {
  const user = await getUser();
  // const initialPosts = await getCachedPosts();
  const initialPosts = await getPosts();

  return (
    <div className="mt-[80px] w-full flex flex-col items-center">
      <div className="flex flex-col w-screen md:w-[768px] items-center p-5">
        <div className="w-full flex justify-between items-center text-2xl sm:text-4xl font-bold mb-6">
          <span>포스트</span>
          {user?.role === "ADMIN" ? (
            <div className="flex gap-1 sm:gap-2">
              <Link
                className="bg-orange-500 hover:bg-orange-600 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-md 
            text-white text-xs sm:text-sm font-semibold flex gap-1 justify-center items-center"
                href={"/post/add"}
              >
                새포스트
                <PlusIcon className="size-4 sm:size-5" />
              </Link>
              <Link
                className="bg-orange-500 hover:bg-orange-600 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-md 
            text-white text-xs sm:text-sm font-semibold flex gap-1 justify-center items-center"
                href={"/post/list"}
              >
                포스트수정
                <PencilSquareIcon className="size-4 sm:size-5" />
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
        <PostList initialPosts={initialPosts} />
      </div>
    </div>
  );
}
