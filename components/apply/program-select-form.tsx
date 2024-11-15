"use client";

import { useState } from "react";
import ReservationForm from "./reservation-form";
import { PROGRAM_OPTIONS, PROGRAM_OPTIONS_KOR } from "@/lib/contents/program";
import { formatToWon } from "@/lib/utils";

type ProgramKey = {
  [key: string]: () => JSX.Element;
};

const PROGRAMS: ProgramKey = {
  chat: () => (
    <div
      className="border-[1px] border-neutral-700 rounded-sm border-dashed font-bold
  p-4 mb-4 text-neutral-700 dark:text-neutral-300 dark:border-neutral-300"
    >
      입금 후 신청이 확인되면 적어주신 연락처로 상담사가 상담연락을 드립니다.
    </div>
  ),
  mail: () => (
    <div
      className="border-[1px] border-neutral-700 rounded-sm border-dashed font-bold
p-4 mb-4 text-neutral-700 dark:text-neutral-300 dark:border-neutral-300"
    >
      입금 후 신청이 확인되면 적어주신 메일로 상담사가 상담연락을 드립니다.
    </div>
  ),
  online: () => (
    <div className="flex flex-col gap-3 mb-2">
      <div className="font-bold dark:text-neutral-200">
        상담희망일시 <span className="text-rose-500">*</span>
      </div>
      <div className="flex gap-2 w-full">
        <div className="w-1/2">
          <ReservationForm />
        </div>
      </div>
    </div>
  ),
};

export default function ProgramSelectForm() {
  const [program, setProgram] = useState("");
  const [option, setOption] = useState("");

  const handleChangeProgram = (program: string) => {
    if (program === "chat") {
      setProgram("chat");
    } else if (program === "mail") {
      setProgram("mail");
    } else {
      setProgram("online");
    }
  };

  const handleChangeOption = (option: string) => {
    if (option === "decade") {
      setOption("decade");
    } else {
      setOption("whole");
    }
  };

  const handleChecked = () => {};

  return (
    <div className="flex flex-col">
      <input
        name="option"
        type="text"
        onChange={handleChecked}
        value={program && option ? PROGRAM_OPTIONS_KOR[program][option] : ""}
        className="hidden"
        required
      />
      <div className="grid grid-cols-3 gap-4 w-full px-1 mb-4">
        <div
          onClick={() => handleChangeProgram("chat")}
          className={`flex gap-3 items-center rounded-sm h-10 font-bold px-3 cursor-pointer transition-colors
            ring-2 ${
              program === "chat"
                ? "ring-orange-500 bg-orange-300 text-neutral-800"
                : "ring-neutral-400 bg-neutral-300 text-neutral-500"
            }`}
        >
          <input
            type="checkbox"
            onChange={handleChecked}
            checked={program === "chat" ? true : false}
            className="cursor-pointer checked:bg-orange-600"
          />
          채팅
        </div>
        <div
          onClick={() => handleChangeProgram("mail")}
          className={`flex gap-3 items-center rounded-sm h-10 font-bold px-3 cursor-pointer transition-colors
              ring-2 ${
                program === "mail"
                  ? "ring-orange-500 bg-orange-300 text-neutral-800"
                  : "ring-neutral-400 bg-neutral-300 text-neutral-500"
              }`}
        >
          <input
            type="checkbox"
            onChange={handleChecked}
            checked={program === "mail" ? true : false}
            className="cursor-pointer checked:bg-orange-600 active:bg-none"
          />
          메일링
        </div>
        <div
          onClick={() => handleChangeProgram("online")}
          className={`flex gap-3 items-center rounded-sm h-10 font-bold px-3 cursor-pointer transition-colors
              ring-2 ${
                program === "online"
                  ? "ring-orange-500 bg-orange-300 text-neutral-800"
                  : "ring-neutral-400 bg-neutral-300 text-neutral-500"
              }`}
        >
          <input
            type="checkbox"
            onChange={handleChecked}
            checked={program === "online" ? true : false}
            className="cursor-pointer checked:bg-orange-600 active:bg-none"
          />
          온라인미팅
        </div>
      </div>
      {program === "" ? (
        ""
      ) : (
        <div className="flex flex-col gap-3 mb-4">
          <div className="font-bold">
            프로그램 옵션을 선택해주세요
            <span className="text-rose-500">*</span>
          </div>
          <div className="grid grid-cols-3 gap-4 w-full px-1">
            <div
              onClick={() => handleChangeOption("decade")}
              className={`flex gap-3 items-center rounded-sm h-10 font-bold px-3 cursor-pointer transition-colors
              ring-2 ${
                option === "decade"
                  ? "ring-orange-500 bg-orange-300 text-neutral-800"
                  : "ring-neutral-400 bg-neutral-300 text-neutral-500"
              }`}
            >
              <input
                type="checkbox"
                onChange={handleChecked}
                checked={option === "decade" ? true : false}
                className="cursor-pointer checked:bg-orange-600"
              />
              10년 분석
            </div>
            <div
              onClick={() => handleChangeOption("whole")}
              className={`flex gap-3 items-center rounded-sm h-10 font-bold px-3 cursor-pointer transition-colors
              ring-2 ${
                option === "whole"
                  ? "ring-orange-500 bg-orange-300 text-neutral-800"
                  : "ring-neutral-400 bg-neutral-300 text-neutral-500"
              }`}
            >
              <input
                type="checkbox"
                onChange={handleChecked}
                checked={option === "whole" ? true : false}
                className="cursor-pointer checked:bg-orange-600 active:bg-none"
              />
              평생 분석
            </div>
          </div>
        </div>
      )}
      {typeof PROGRAMS[program] === "function" ? PROGRAMS[program]() : ""}
      {option === "" ? (
        ""
      ) : (
        <div className="font-bold text-lg mt-2 text-rose-500">
          참가비: {formatToWon(PROGRAM_OPTIONS[program][option])}원
        </div>
      )}
    </div>
  );
}
