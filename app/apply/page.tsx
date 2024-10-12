"use client";

import Input from "@/components/common/input";
import Button from "@/components/common/button";
import SocialLogin from "@/components/auth/social-login";
import { useFormState } from "react-dom";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";
import { createApply } from "./actions";

export default function Apply() {
  const [state, dispatch] = useFormState(createApply, null);

  return (
    <div className="w-ful flex justify-center mt-[80px]">
      <div className="flex flex-col gap-8 py-8 px-6 w-full sm:w-[640px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">상담신청</h1>
          <h2 className="text-xl">성장의 방향을 함께 발견해요.</h2>
        </div>
        <form action={dispatch} className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="font-bold dark:text-neutral-200">이름</div>
            <Input
              name="username"
              type="text"
              placeholder="이름을 입력하세요"
              required={true}
              errors={state?.fieldErrors.username}
              minLength={3}
              maxLength={10}
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="font-bold dark:text-neutral-200">성별</div>
            <select
              className="bg-transparent rounded-md w-full transition
              h-10 focus:outline-none ring-2 focus:ring-4 ring-neutral-200
            focus:ring-orange-500 border-none placeholder:text-neutral-400"
            >
              <option>남자</option>
              <option>여자</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <div className="font-bold dark:text-neutral-200">연락처</div>
            <Input
              name="email"
              type="number"
              placeholder="연락처를 입력하세요"
              required={true}
              errors={state?.fieldErrors.email}
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="font-bold dark:text-neutral-200">프로그램 선택</div>
            <select
              className="bg-transparent rounded-md w-full transition
              h-10 focus:outline-none ring-2 focus:ring-4 ring-neutral-200
            focus:ring-orange-500 border-none placeholder:text-neutral-400"
            >
              <option>메일 상담 / 회당 20,000원</option>
              <option>온라인 상담 / 1회 30분 50,000원</option>
              <option>오프라인 상담 / 1회 30분 80,000원</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <div className="font-bold dark:text-neutral-200">생년월일시</div>
            <div className="flex gap-2 w-full">
              <div className="w-1/2">
                <Input
                  name="password"
                  type="date"
                  placeholder="생년월일을 입력해주세요"
                  required={true}
                  errors={state?.fieldErrors.password}
                  minLength={PASSWORD_MIN_LENGTH}
                />
              </div>
              <div className="w-1/2">
                <Input
                  name="password"
                  type="time"
                  placeholder="생년월일을 입력해주세요"
                  required={true}
                  errors={state?.fieldErrors.password}
                  minLength={PASSWORD_MIN_LENGTH}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="font-bold dark:text-neutral-200">상담희망일시</div>
            <div className="flex gap-2 w-full">
              <div className="w-1/2">
                <Input
                  name="password"
                  type="date"
                  placeholder="생년월일을 입력해주세요"
                  required={true}
                  errors={state?.fieldErrors.password}
                  minLength={PASSWORD_MIN_LENGTH}
                />
              </div>
              <div className="w-1/2">
                <Input
                  name="password"
                  type="time"
                  placeholder="생년월일을 입력해주세요"
                  required={true}
                  errors={state?.fieldErrors.password}
                  minLength={PASSWORD_MIN_LENGTH}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="font-bold dark:text-neutral-200">
              상담 희망 내용
            </div>
            <Input
              name="password"
              type="text"
              placeholder="희망하시는 상담의 내용을 간략히 기재해주세요 ex) 진로, 연애, 대인관계 등"
              required={true}
              errors={state?.fieldErrors.password}
              minLength={PASSWORD_MIN_LENGTH}
            />
          </div>
          <div className="flex flex-col gap-3 mb-4">
            <div className="font-bold dark:text-neutral-200">
              개인정보이용동의
            </div>
            <div className="flex gap-8 w-full">
              <div className="flex gap-3 items-center">
                <span>동의함</span>
                <div className="w-[40px]">
                  <Input
                    name="password"
                    type="checkbox"
                    placeholder="생년월일을 입력해주세요"
                    errors={state?.fieldErrors.password}
                    minLength={PASSWORD_MIN_LENGTH}
                  />
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <span>동의하지 않음</span>
                <div className="w-[40px]">
                  <Input
                    name="password"
                    type="checkbox"
                    placeholder="생년월일을 입력해주세요"
                    errors={state?.fieldErrors.password}
                    minLength={PASSWORD_MIN_LENGTH}
                  />
                </div>
              </div>
            </div>
          </div>
          <Button text="상담신청" />
        </form>
      </div>
    </div>
  );
}
