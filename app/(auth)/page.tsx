import Image from "next/image";
import Link from "next/link";
// import "@/lib/db";

export default function Program() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="flex gap-2 items-center">
        <Image
          src={`https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/bf65bae9-4102-4836-eb97-9a5841ebd700/avatar`}
          alt=""
          width={24}
          height={24}
        />
        <span className="font-semibold text-neutral-200">
          아웃클래스 스튜디오
        </span>
      </div>
      <div className="my-auto flex flex-col items-start gap-2 w-full px-3">
        <h1 className="text-4xl font-extrabold">아웃클래스 랜드,</h1>
        <h2 className="text-2xl font-medium mb-2">나를 발견하고 성장하는 곳</h2>
        <div className="whitespace-pre-wrap font-light text-neutral-200">
          {`길을 잃어 막막할 때\n선택의 기로에서 고민할 때\n자신을 발견하고 성장할 수 있도록 도와드립니다.
          `}
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link href="/create-account" className="primary-btn py-2.5">
          시작하기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있나요?</span>
          <Link href="/login" className="hover:underline">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
