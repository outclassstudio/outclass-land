import Image from "next/image";
import Link from "next/link";
// import "@/lib/db";

export default function Program() {
  return (
    <div className="flex flex-col items-center justify-between h-full bg-[#fffae0] mt-[72px]">
      <div className="flex flex-col gap-2 max-w-screen-md p-3 h-[700px] justify-center">
        <div className="my-auto flex flex-col gap-2 w-full">
          <h1 className="text-5xl text-neutral-800 font-extrabold">
            아웃클래스 랜드
          </h1>
          <h2 className="text-2xl text-neutral-800 font-medium mb-4">
            나를 발견하고 성장하는 곳
          </h2>
          <div className="whitespace-pre-wrap font-normal text-neutral-800 mb-6">
            {`길을 잃어 막막할 때\n선택의 기로에서 고민할 때\n자신을 발견하고 성장할 수 있도록 도와드립니다.
          `}
          </div>
          <div className="flex w-full gap-2 mb-2">
            <Link
              href={"/consult"}
              className="primary-btn h-12 flex items-center justify-center w-[150px]"
            >
              상담받기
            </Link>
            <Link
              href="/create-account"
              className="primary-btn h-12 flex items-center justify-center w-[150px]"
            >
              가입하기
            </Link>
          </div>
          <div className="flex gap-2 px-1 text-neutral-800 ">
            <span>이미 계정이 있나요?</span>
            <Link href="/login" className="hover:underline">
              로그인
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 w-full"></div>
    </div>
  );
}
