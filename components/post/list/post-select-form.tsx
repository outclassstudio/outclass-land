"use client";

import Link from "next/link";
import {
  ChevronDoubleRightIcon,
  PencilSquareIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { InitialPosts } from "@/app/post/actions";

interface PostsSelectProps {
  initialPosts: InitialPosts;
}

export default function PostSelectForm({ initialPosts }: PostsSelectProps) {
  const [id, setId] = useState(initialPosts[0].id);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setId(+e.target.value);
  };

  return (
    <>
      <select
        onChange={handleSelect}
        className="input-style w-full h-10 text-neutral-400 mb-6"
      >
        {initialPosts.map((post, idx) => (
          <option key={idx} value={post.id}>
            {post.title}
          </option>
        ))}
      </select>
      <div className="flex flex-col gap-1 sm:gap-2">
        <Link
          className="bg-orange-500 hover:bg-orange-600 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-md 
        text-white text-sm sm:text-base font-semibold flex gap-1 justify-center items-center"
          href={`/post/edit/${id}`}
        >
          포스트수정
          <PencilSquareIcon className="size-4 sm:size-5" />
        </Link>
        <Link
          className="bg-orange-500 hover:bg-orange-600 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-md 
        text-white text-sm sm:text-base font-semibold flex gap-1 justify-center items-center"
          href={"/post/add"}
        >
          새포스트
          <PlusIcon className="size-4 sm:size-5" />
        </Link>
        <Link
          className="bg-neutral-500 hover:bg-neutral-600 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-md 
        text-white text-sm sm:text-base font-semibold flex gap-1 justify-center items-center"
          href={"/post"}
        >
          목록으로
          <ChevronDoubleRightIcon className="size-4 sm:size-5" />
        </Link>
      </div>
    </>
  );
}
