import {
  ArrowRightCircleIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function ButtonBox() {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Link
        href={"/program"}
        className="shadow-sm text-white px-8 py-4 rounded-lg text-lg font-semibold bg-orange-500 hover:bg-orange-600 transition-colors flex items-center gap-2"
      >
        상담 시작하기
        <ArrowRightCircleIcon className="size-5" />
      </Link>
      <Link
        href={"/contact"}
        className="border-[1px] shadow-sm text-neutral-700 px-8 py-4 rounded-lg text-lg font-semibold bg-neutral-100 hover:bg-neutral-200 transition-colors flex items-center gap-2
    justify-center"
      >
        문의하기
        <ChatBubbleLeftIcon className="size-5" />
      </Link>
    </div>
  );
}
