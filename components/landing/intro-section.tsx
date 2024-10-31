import {
  ArrowRightCircleIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function IntroSection() {
  return (
    <div className="w-screen py-40">
      <div className="text-center flex flex-col items-center px-5">
        <h1
          className="text-5xl md:text-6xl font-extrabold mb-8 drop-shadow-sm
        bg-gradient-to-r from-orange-400 to-rose-500 text-transparent bg-clip-text
        whitespace-pre-wrap sm:whitespace-normal"
        >
          {`당신의 잠재력을\n깨우는 파트너`}
        </h1>
        <p className="font-semibold text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 mb-10 whitespace-pre-wrap">
          {`길을 잃어 막막할 때, 선택의 기로에서 고민할 때,\n자신을 발견하고 성장할 수 있도록 도와드립니다.
          `}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href={"/program"}
            className="shadow-sm text-white px-8 py-4 rounded-lg text-lg font-semibold bg-orange-500 hover:bg-orange-600 transition-colors flex items-center gap-2"
          >
            상담 시작하기
            <ArrowRightCircleIcon className="size-5" />
          </Link>
          <Link
            href={"/program"}
            className="border-[1px] shadow-sm text-neutral-700 px-8 py-4 rounded-lg text-lg font-semibold bg-neutral-100 hover:bg-neutral-200 transition-colors flex items-center gap-2
            justify-center"
          >
            문의하기
            <ChatBubbleLeftIcon className="size-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
//bg-[#fffae0]
// text-gray-900
// container
// bg-center bg-cover bg-[url(https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/a3786944-6f32-4c5e-0f12-b4d6d39ac500/width=1920,height=1080)]
