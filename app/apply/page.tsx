"use client";

import Input from "@/components/common/input";
import { useFormState } from "react-dom";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";
import { createApply } from "./actions";
import ConsentForm from "@/components/apply/consent-form";
import ReservationForm from "@/components/apply/reservation-form";

export default function Apply() {
  const [state, dispatch] = useFormState(createApply, null);

  return (
    <div className="w-ful flex justify-center mt-[72px]">
      <div className="flex flex-col gap-8 py-8 px-6 w-full sm:w-[640px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">상담신청</h1>
          <h2 className="text-xl">성장의 방향을 함께 발견해요.</h2>
        </div>
        <form action={dispatch} className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="font-bold dark:text-neutral-200">이름</div>
            <Input
              name="username"
              type="text"
              placeholder="이름을 입력하세요"
              required={true}
              errors={state?.fieldErrors.username}
              minLength={1}
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="font-bold dark:text-neutral-200">성별</div>
            <select name="program" className="input-style w-full h-10">
              <option>남자</option>
              <option>여자</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-bold dark:text-neutral-200">연락처</div>
            <div className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
              * - 없이 01012345678 형식으로 적어주세요
            </div>
            <Input
              name="phone"
              type="number"
              placeholder="연락처를 입력하세요"
              required={true}
              errors={state?.fieldErrors.phone}
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="font-bold dark:text-neutral-200">프로그램 선택</div>
            <select name="program" className="input-style w-full h-10">
              <option>메일 상담 / 회당 20,000원</option>
              <option>온라인 상담 / 1회 30분 50,000원</option>
              <option>오프라인 상담 / 1회 30분 80,000원</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <div className="font-bold dark:text-neutral-200">상담희망일시</div>
            <div className="flex gap-2 w-full">
              <div className="w-1/2">
                <ReservationForm />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-bold dark:text-neutral-200">생년월일시</div>
            <div className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
              * 생시를 입력해야 상담을 받을 수 있어요.
            </div>
            <div className="flex gap-2 w-full">
              <div className="w-1/2">
                <Input
                  name="birth"
                  type="date"
                  required={true}
                  // errors={state?.fieldErrors.password}
                  minLength={PASSWORD_MIN_LENGTH}
                />
              </div>
              <div className="w-1/2">
                <Input
                  name="birthTime"
                  type="time"
                  required={true}
                  // errors={state?.fieldErrors.password}
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
              name="subject"
              type="text"
              placeholder="희망하시는 상담의 내용을 간략히 기재해주세요 ex) 진로, 연애, 대인관계 등"
              required={true}
              errors={state?.fieldErrors.subject}
              minLength={PASSWORD_MIN_LENGTH}
            />
          </div>
          <ConsentForm />
        </form>
      </div>
    </div>
  );
}
