"use client";

import { useState } from "react";
import Button from "../common/button";

export default function ConsentForm() {
  const [isConsent, setIsConsent] = useState(true);

  const handleConsent = (consent: string) => {
    if (consent === "consent") {
      setIsConsent(true);
    } else {
      setIsConsent(false);
    }
  };

  const handleChecked = () => {};

  return (
    <>
      <div className="flex flex-col gap-3 mb-4">
        <div className="font-bold dark:text-neutral-200">
          개인 정보 이용 동의
        </div>
        <div
          className="border-[1px] border-neutral-700 rounded-sm border-dashed
          p-4 mb-4 text-neutral-700 dark:text-neutral-300 dark:border-neutral-300"
        >
          Outclass Land는 귀하의 소중한 개인정보를 수집함에 있어서
          ⌈개인정보보호법⌋에 따라 본인의 동의를 얻고 있습니다
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div
            onClick={() => handleConsent("consent")}
            className={`flex gap-3 items-center w-1/2 rounded-sm h-10 font-bold px-3 cursor-pointer
            ring-2 ${
              isConsent
                ? "ring-orange-500 bg-orange-300 text-neutral-800"
                : "ring-neutral-400 bg-neutral-300 text-neutral-500"
            }`}
          >
            <input
              name="consent"
              type="checkbox"
              onChange={handleChecked}
              checked={isConsent}
              className="cursor-pointer checked:bg-orange-600"
            />
            동의함
          </div>
          <div
            onClick={() => handleConsent("inconsent")}
            className={`flex gap-3 items-center w-1/2 rounded-sm h-10 font-bold px-3 cursor-pointer
              ring-2 ${
                isConsent
                  ? "ring-neutral-400 bg-neutral-300 text-neutral-500"
                  : "ring-orange-500 bg-orange-300 text-neutral-800"
              }`}
          >
            <input
              name="consent"
              type="checkbox"
              onChange={handleChecked}
              checked={!isConsent}
              className="cursor-pointer checked:bg-orange-600 active:bg-none"
            />
            동의하지 않음
          </div>
        </div>
      </div>
      {isConsent ? (
        <Button text="상담신청" />
      ) : (
        <Button disabled text="상담신청" />
      )}
    </>
  );
}
