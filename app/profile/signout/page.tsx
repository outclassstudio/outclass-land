"use client";

import Button from "@/components/common/button";
import Input from "@/components/common/input";
import { useFormState } from "react-dom";
import { CheckPassword } from "./actions";
import Link from "next/link";

const signoutState = false;

export default function Signout() {
  const [state, dispatch] = useFormState(CheckPassword, signoutState);
  return (
    <div className="mt-[80px] flex flex-col items-center gap-6 h-[calc(100vh-200px)]">
      <div className="w-full sm:w-[640px] p-3 flex flex-col gap-10">
        <div className="w-full">
          <span className="text-xl font-bold">계정 삭제</span>
        </div>
        <form action={dispatch} className="flex flex-col gap-4">
          {state ? (
            <>
              <div className="text-red-500 font-bold text-lg flex justify-center">
                한번 삭제된 계정은 복구할 수 없어요
              </div>
              <Button text="계정을 삭제합니다." />
              <Link
                href="/profile/edit"
                className="bg-neutral-500 text-white w-full h-10 
        rounded-lg flex justify-center items-center text-lg font-semibold"
              >
                돌아가기
              </Link>
            </>
          ) : (
            <>
              <span>암호입력</span>
              <Input autoComplete="off" name="password" />
              <Button text="비밀번호확인" />
            </>
          )}
        </form>
      </div>
    </div>
  );
}
