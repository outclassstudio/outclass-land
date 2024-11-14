"use client";

import { useState } from "react";
import ReservationForm from "./reservation-form";

export default function ProgramSelectForm() {
  const [option, setOption] = useState("chat");

  const handleConsent = (option: string) => {
    if (option === "chat") {
      setOption("chat");
    } else if (option === "mail") {
      setOption("mail");
    } else {
      setOption("online");
    }
  };

  const handleChecked = () => {};

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-3 gap-4 w-full px-1">
        <div
          onClick={() => handleConsent("chat")}
          className={`flex gap-3 items-center rounded-sm h-10 font-bold px-3 cursor-pointer transition-colors
            ring-2 ${
              option === "chat"
                ? "ring-orange-500 bg-orange-300 text-neutral-800"
                : "ring-neutral-400 bg-neutral-300 text-neutral-500"
            }`}
        >
          <input
            name="option"
            type="checkbox"
            onChange={handleChecked}
            checked={option === "chat" ? true : false}
            className="cursor-pointer checked:bg-orange-600"
          />
          채팅
        </div>
        <div
          onClick={() => handleConsent("mail")}
          className={`flex gap-3 items-center rounded-sm h-10 font-bold px-3 cursor-pointer transition-colors
              ring-2 ${
                option === "mail"
                  ? "ring-orange-500 bg-orange-300 text-neutral-800"
                  : "ring-neutral-400 bg-neutral-300 text-neutral-500"
              }`}
        >
          <input
            name="option"
            type="checkbox"
            onChange={handleChecked}
            checked={option === "mail" ? true : false}
            className="cursor-pointer checked:bg-orange-600 active:bg-none"
          />
          메일링
        </div>
        <div
          onClick={() => handleConsent("online")}
          className={`flex gap-3 items-center rounded-sm h-10 font-bold px-3 cursor-pointer transition-colors
              ring-2 ${
                option === "online"
                  ? "ring-orange-500 bg-orange-300 text-neutral-800"
                  : "ring-neutral-400 bg-neutral-300 text-neutral-500"
              }`}
        >
          <input
            name="option"
            type="checkbox"
            onChange={handleChecked}
            checked={option === "online" ? true : false}
            className="cursor-pointer checked:bg-orange-600 active:bg-none"
          />
          온라인미팅
        </div>
      </div>
      {option === "chat" ? (
        <div
          className="border-[1px] border-neutral-700 rounded-sm border-dashed font-bold
          p-4 mb-4 text-neutral-700 dark:text-neutral-300 dark:border-neutral-300"
        >
          입금 후 신청이 확인되면 적어주신 연락처로 상담사가 상담연락을
          드립니다.
        </div>
      ) : (
        ""
      )}
      {option === "mail" ? (
        <div
          className="border-[1px] border-neutral-700 rounded-sm border-dashed font-bold
          p-4 mb-4 text-neutral-700 dark:text-neutral-300 dark:border-neutral-300"
        >
          입금 후 신청이 확인되면 적어주신 메일로 상담사가 상담연락을 드립니다.
        </div>
      ) : (
        ""
      )}
      {option === "online" ? (
        <div className="flex flex-col gap-3">
          <div className="font-bold dark:text-neutral-200">상담희망일시</div>
          <div className="flex gap-2 w-full">
            <div className="w-1/2">
              <ReservationForm />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
