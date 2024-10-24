"use client";

import Link from "next/link";
import { useState } from "react";
import DeleteConfirmModal from "../common/delete-confirm-modal";
import { deletePost } from "@/app/post/edit/[id]/actions";
import { useRouter } from "next/navigation";

export default function PostEditMenu({ id }: { id: number }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const router = useRouter();

  const handleDeleteModalopen = () => {
    setIsDeleteModalOpen((prev) => !prev);
  };

  const handlePostDelete = async () => {
    const result = await deletePost(id);
    if (result) {
      router.push("/post");
    }
  };

  return (
    <div className="*:text-neutral-400 flex gap-2 items-center *:cursor-pointer">
      <Link href={`/post/edit/${id}`} className="hover:text-neutral-200">
        수정
      </Link>
      <span onClick={handleDeleteModalopen} className="hover:text-red-500">
        삭제
      </span>
      {isDeleteModalOpen ? (
        <DeleteConfirmModal
          handleModalClose={handleDeleteModalopen}
          handleDelete={handlePostDelete}
        />
      ) : (
        ""
      )}
    </div>
  );
}
