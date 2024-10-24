import { dummyData } from "@/lib/dummy";
import { formatToTimeAgo, formatToWon } from "@/lib/utils";
import {
  ChatBubbleLeftRightIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

// interface ListProductProps {
//   id: number;
//   title: string;
//   price: number;
//   created_at: Date;
//   photo: string;
//   _count: {
//     productLikes: number;
//     chatrooms: number;
//   };
// }
interface ListProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  photo: string;
  created_at: Date;
}

export default function ListProduct({
  id,
  title,
  price,
  created_at,
  description,
  photo,
}: // _count,
ListProductProps) {
  const [program] = dummyData.filter((data) => data.id === +id);
  return (
    <Link
      href={program.isOpen ? `/program/${id}` : ""}
      className={`w-full border-2 rounded-lg dark:border-neutral-700 relative ${
        program.isOpen ? "" : "cursor-not-allowed"
      }`}
    >
      <div className={`flex flex-col gap-5 ${program.isOpen ? "" : "blur-md"}`}>
        <div className="relative aspect-video rounded-t-md overflow-hidden">
          <Image
            fill
            src={`${photo}/width=960,height=540`}
            alt={title}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col px-5 gap-2 w-full">
          {/* <div className="text-md font-semibold text-orange-700">
          사주명리상담
        </div> */}
          <div className="text-2xl text-neutral-800 dark:text-white font-bold">
            사주명리 상담
          </div>
          <div className="text-neutral-700 dark:text-neutral-300 font-light mb-10">
            {description}
          </div>
          <div className="flex gap-2 border-b border-neutral-300 dark:border-neutral-700 pb-7 *:text-white">
            <span className="rounded-md bg-neutral-500 px-2 py-1 text-sm">
              사주명리
            </span>
            <span className="rounded-md bg-neutral-500 px-2 py-1 text-sm">
              성향분석
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-end gap-3 px-5">
            <span className="text-xl font-bold">₩{formatToWon(price)}원 ~</span>
            {/* <span className="text-neutral-400 line-through">₩40,000원</span>
          <span className="text-red-500 font-bold">50%</span> */}
          </div>
          <div
            className="w-full flex justify-end items-center gap-3 *:text-neutral-400
        *:flex *:gap-1 *:items-center p-5"
          >
            <div>
              <HeartIcon className="size-4" />
              <span>100</span>
              {/* <span>{_count.productLikes}</span> */}
            </div>
            {/* {_count.chatrooms ? (
            <div>
              <ChatBubbleLeftRightIcon className="size-4" />
              <span>{_count.chatrooms}</span>
            </div>
          ) : (
            ""
          )} */}
          </div>
        </div>
      </div>
      {program.isOpen ? (
        ""
      ) : (
        <div
          className="absolute left-0 top-0 w-full h-full bg-neutral-800 opacity-70 z-1 rounded-lg
          flex justify-center items-center text-white font-bold text-3xl"
        >
          준비중입니다.
        </div>
      )}
    </Link>
  );
}
