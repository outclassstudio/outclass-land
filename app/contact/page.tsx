import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const metadata = {
  title: "문의하기",
};

export default function Contact() {
  return (
    <div className="mt-[80px] w-full flex justify-center h-[calc(100vh-220px)]">
      <div className="w-full px-7 sm:w-[768px] flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4 mb-4">
          <div className="text-3xl sm:text-4xl font-extrabold text-neutral-800 dark:text-neutral-200">
            🤔 문의하기
          </div>
          <div
            className="text-lg sm:text-xl font-semibold text-neutral-600 dark:text-neutral-400
          flex flex-col gap-1 mb-2"
          >
            <span>
              아웃클래스는 서비스 문의를 위해 카카오톡 채널을 운영하고 있습니다.
            </span>
            <span>비즈니스 문의는 이메일로 해주세요.</span>
          </div>

          <ul className="text-neutral-600 dark:text-neutral-400 mb-8 leading-8">
            <li>상담 운영 시간 : 09:00 ~ 22:00</li>
            <li>이메일 : outclassstudio@gmail.com</li>
          </ul>
        </div>
        <Link
          href=""
          className="bg-yellow-300 hover:bg-yellow-400 py-5 px-7 text-neutral-700 rounded-lg
          font-bold flex gap-2 items-center shadow-md"
        >
          <ChatBubbleLeftIcon className="size-7" /> 카카오톡으로 문의하기
        </Link>
      </div>
    </div>
  );
}
