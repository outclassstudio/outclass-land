import { BookOpenIcon, FolderIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Admin() {
  return (
    <div className="mt-[80px] w-full flex justify-center h-[calc(100vh-200px)]">
      <div className="w-full sm:w-[768px] flex flex-col items-center p-5">
        <div className="w-full flex justify-between items-center text-2xl sm:text-4xl font-bold mb-4 sm:mb-8">
          <span>관리자</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <Link
            href={"/program/list"}
            className="text-neutral-700 border-2 w-full sm:w-1/2 h-[300px] flex flex-col justify-center items-center gap-3
            bg-rose-50 hover:bg-rose-100 shadow-md"
          >
            <FolderIcon className="size-10" />
            <div className="text-2xl sm:text-3xl font-bold text-neutral-800 mb-2">
              프로그램
            </div>
            <div className="text-sm sm:text-base">
              프로그램 추가 / 수정 / 삭제
            </div>
          </Link>
          <Link
            href={"/post/list"}
            className="text-neutral-700 border-2 w-full sm:w-1/2 h-[300px] flex flex-col justify-center items-center gap-3
            bg-orange-50 hover:bg-orange-100 shadow-md"
          >
            <BookOpenIcon className="size-10" />
            <div className="text-2xl sm:text-3xl font-bold text-neutral-800 mb-2">
              포스트
            </div>
            <div className="text-sm sm:text-base">
              포스트 추가 / 수정 / 삭제
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
