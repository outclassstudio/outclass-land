"use client";

import Input from "@/components/common/input";
import Button from "@/components/common/button";
import { login } from "./actions";
import { useFormState } from "react-dom";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function LogIn() {
  const [state, dispatch] = useFormState(login, null);

  return (
    <div className="mt-[80px] flex justify-center h-[calc(100vh-200px)]">
      <div className="w-full sm:w-[768px] flex flex-col gap-12 py-8 px-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">안녕하세요!</h1>
          <h2 className="text-xl">아웃클래스 랜드에 오신 것을 환영합니다.</h2>
        </div>
        <form action={dispatch} className="flex flex-col gap-4">
          <Input
            name="email"
            type="email"
            placeholder="이메일을 입력하세요"
            required
            errors={state?.fieldErrors.email}
          />
          <Input
            name="password"
            type="password"
            placeholder="비밀번호를 한번 더 입력하세요"
            required
            errors={state?.fieldErrors.password}
            minLength={PASSWORD_MIN_LENGTH}
          />
          <Button text="로그인" />
        </form>
      </div>
    </div>
  );
}
