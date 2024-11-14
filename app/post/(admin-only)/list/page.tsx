import PostSelectForm from "@/components/post/list/post-select-form";
import { getPosts } from "../../actions";

export default async function ProgramList() {
  const initialPosts = await getPosts();

  return (
    <div className="w-full flex justify-center h-[calc(100vh-220px)]">
      <div className="w-screen md:w-[768px] flex flex-col p-5 gap-6">
        <div className="w-full flex text-3xl sm:text-4xl font-bold">
          포스트 선택
        </div>
        <PostSelectForm initialPosts={initialPosts} />
      </div>
    </div>
  );
}
