"use client";

import Input from "@/components/common/input";
import Button from "@/components/common/button";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function CreateAccount() {
  const [state, dispatch] = useFormState(createAccount, null);

  return (
    <div className="mt-[80px] flex justify-center h-[calc(100vh-200px)]">
      <div className="w-full sm:w-[768px] flex flex-col gap-12 py-8 px-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">안녕하세요!</h1>
          <h2 className="text-xl">
            아웃클래스 랜드와 함께 새로운 삶의 여정을 시작해요.
          </h2>
        </div>
        <form action={dispatch} className="flex flex-col gap-4">
          <Input
            name="username"
            type="text"
            placeholder="아이디를 입력하세요"
            required={true}
            errors={state?.fieldErrors.username}
            minLength={3}
            maxLength={10}
          />
          <Input
            name="email"
            type="email"
            placeholder="이메일을 입력하세요"
            required={true}
            errors={state?.fieldErrors.email}
          />
          <Input
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            required={true}
            errors={state?.fieldErrors.password}
            minLength={PASSWORD_MIN_LENGTH}
          />
          <Input
            name="confirm_password"
            type="password"
            placeholder="비밀번호를 한번 더 입력하세요"
            required={true}
            errors={state?.fieldErrors.confirm_password}
            minLength={PASSWORD_MIN_LENGTH}
          />
          <Button text="계정 만들기" />
        </form>
      </div>
    </div>
  );
}
