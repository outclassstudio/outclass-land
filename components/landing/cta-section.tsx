import Link from "next/link";
import ButtonBox from "./button-box";

export default function CTASection() {
  return (
    <div className="w-screen bg-[#fffae0] py-28">
      <div className="px-4 text-center flex flex-col items-center">
        <h2
          className="text-5xl md:text-6xl font-extrabold mb-8 drop-shadow-sm
        bg-gradient-to-r from-orange-400 to-rose-500 text-transparent bg-clip-text
        whitespace-pre-wrap sm:whitespace-normal"
        >
          함께 만드는 미래
        </h2>
        <p className="font-semibold text-lg sm:text-xl text-neutral-700 mb-10 whitespace-pre-wrap">
          {`아웃클래스와 함께 \n삶의 새로운 여정을 시작해보세요.`}
        </p>
        <ButtonBox />
        <div className="flex flex-col gap-1 mt-10 *:text-neutral-600">
          <Link
            href={"/create-account"}
            className="hover:text-orange-500 flex gap-1 items-center justify-center"
          >
            계정을 만들고 더 많은 혜택을 받아보세요
          </Link>
          <Link
            href={"/create-account"}
            className="hover:text-orange-500 flex gap-1 items-center justify-center"
          >
            이미 계정이 있다면
          </Link>
        </div>
      </div>
    </div>
  );
}
