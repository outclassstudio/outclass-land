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
  return (
    <Link
      href={`/programs/${id}`}
      className="flex flex-col gap-5 border-neutral-700 
      w-full border-2 rounded-lg"
    >
      <div className="relative aspect-video rounded-t-md overflow-hidden">
        <Image
          fill
          src={`${photo}/width=480,height=270`}
          alt={title}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col px-5 gap-2 w-full">
        <div className="text-md font-semibold text-orange-700">
          사주명리상담
        </div>
        <div className="text-2xl text-white font-bold">[자기개발] {title}</div>
        <div className="text-neutral-300 font-light h-[80px]">
          {description}
        </div>
        <div className="flex gap-2 border-b border-neutral-700 pb-7 *:text-white">
          <span className="rounded-md bg-neutral-500 px-2 py-1 text-sm">
            사주명리
          </span>
          <span className="rounded-md bg-neutral-500 px-2 py-1 text-sm">
            자기개발
          </span>
        </div>
      </div>
      <div>
        <div className="flex items-end gap-3 px-5">
          <span className="text-xl font-bold">₩{formatToWon(price)}원</span>
          <span className="text-neutral-400 line-through">₩40,000원</span>
          <span className="text-red-500 font-bold">50%</span>
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
    </Link>
  );
}
