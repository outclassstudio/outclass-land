"use client";

import Input from "@/components/common/input";
import { useFormState } from "react-dom";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";
import { createApply } from "./actions";
import ConsentForm from "@/components/apply/consent-form";
import ReservationForm from "@/components/apply/reservation-form";
import { programsList } from "@/lib/dummy";

export default function Apply({ params: { id } }: { params: { id: string } }) {
  const [state, dispatch] = useFormState(createApply, null);
  const [program] = programsList.filter((el) => el.id === +id);

  return (
    <div className="w-ful flex justify-center mt-[72px]">
      <div className="flex flex-col gap-8 py-8 px-6 w-full sm:w-[640px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">상담신청</h1>
          <h2 className="text-xl">성장의 방향을 함께 발견해요.</h2>
        </div>
        <form action={dispatch} className="flex flex-col gap-8">
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
            <select
              name="program"
              defaultValue={"DEFAULT"}
              className="input-style w-full h-10 text-neutral-400"
            >
              <option value="DEFAULT" disabled hidden>
                성별을 선택해주세요.
              </option>
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
            <select
              name="program"
              defaultValue={"DEFAULT"}
              className="input-style w-full h-10 text-neutral-400"
            >
              <option value="DEFAULT" disabled hidden>
                프로그램을 선택해주세요.
              </option>
              {program.programs.map((prg, idx) => (
                <option key={idx}>{prg}</option>
              ))}
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
          <div className="flex flex-col gap-3">
            <div className="font-bold dark:text-neutral-200">
              상담 요청 사항
            </div>
            <Input
              name="subject"
              type="text"
              placeholder="상담사에게 요청하고 싶은 내용을 자유롭게 적어주세요"
              required={false}
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
