"use client";

import Input from "@/components/common/input";
import { useFormState } from "react-dom";
import { createApply } from "./actions";
import ConsentForm from "@/components/apply/consent-form";
import ProgramSelectForm from "@/components/apply/program-select-form";

export default function Apply({ params: { id } }: { params: { id: string } }) {
  const [state, dispatch] = useFormState(createApply, null);

  const handleChange = () => {};

  return (
    <div className="w-ful flex justify-center mt-[72px]">
      <div className="flex flex-col gap-8 py-8 px-6 w-full sm:w-[640px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">상담신청</h1>
          <h2 className="text-xl">성장의 방향을 함께 발견해요.</h2>
        </div>
        <form action={dispatch} className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <input
              type="text"
              value={id}
              name="program"
              className="hidden"
              onChange={handleChange}
            />
            <div className="font-bold dark:text-neutral-200">
              이름 <span className="text-rose-500">*</span>
            </div>
            <Input
              name="name"
              type="text"
              placeholder="이름을 입력하세요."
              required={true}
              errors={state?.fieldErrors.name}
              minLength={1}
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="font-bold dark:text-neutral-200">
              성별 <span className="text-rose-500">*</span>
            </div>
            <select
              name="sex"
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
            <div className="font-bold dark:text-neutral-200">
              연락처 <span className="text-rose-500">*</span>
            </div>
            <div className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
              * - 없이 01012345678 형식으로 적어주세요
            </div>
            <Input
              name="phone"
              type="number"
              placeholder="연락처를 입력하세요."
              required={true}
              errors={state?.fieldErrors.phone}
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="font-bold dark:text-neutral-200">
              프로그램 선택 <span className="text-rose-500">*</span>
            </div>
            <ProgramSelectForm />
          </div>
          <div className="flex flex-col gap-3">
            <div className="font-bold dark:text-neutral-200">
              상담 요청 사항
            </div>
            <Input
              name="subject"
              type="text"
              placeholder="상담사에게 요청하고 싶은 내용을 자유롭게 적어주세요."
              required={false}
              errors={state?.fieldErrors.subject}
            />
          </div>
          <ConsentForm />
        </form>
      </div>
    </div>
  );
}
