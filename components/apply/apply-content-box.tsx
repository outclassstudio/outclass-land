"use client";

import { editApplyStatus } from "@/app/admin/apply/actions";
import { StatusOptions } from "@/lib/types/apply";
import { useState } from "react";

interface AppliedProgramProps {
  program: {
    id: number;
    program: {
      title: string;
    };
    name: string;
    phone: string;
    sex: string;
    option: string;
    date: string | null;
    dateTime: string | null;
    subject: string | null;
    status: StatusOptions;
    created_at: Date;
  };
}

export default function ApplyContentBox({ program }: AppliedProgramProps) {
  const [status, setStatus] = useState<StatusOptions>(program.status);

  const PROGRAM_STATUS = {
    INPROGRESS: { name: "INPROGRESS", color: "text-amber-800 bg-amber-300" },
    CONFIRMED: { name: "CONFIRMED", color: "text-green-800 bg-green-300" },
    CANCELLED: { name: "CANCELLED", color: "text-rose-800 bg-rose-300" },
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (
      value === "INPROGRESS" ||
      value === "CONFIRMED" ||
      value === "CANCELLED"
    ) {
      setStatus(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await editApplyStatus(program.id, status);
    if (result) window.location.reload();
  };

  return (
    <tr className="*:text-center border-neutral-300">
      <td className="text-nowrap">{program.name}</td>
      <td className="">{program.phone}</td>
      <td className="">{program.sex}</td>
      <td className="">{program.program.title}</td>
      <td className="">{program.option}</td>
      <td className="">{program.date}</td>
      <td className="">{program.dateTime}</td>
      <td className="">{program.subject}</td>
      <td className="">상담사</td>
      <td className="">
        <form onSubmit={handleSubmit} className="flex gap-2 justify-center">
          <select
            onChange={handleStatusChange}
            defaultValue={PROGRAM_STATUS[status].name}
            className={`text-xs border-none cursor-grab
            rounded-md ${PROGRAM_STATUS[status].color}`}
          >
            <option value="INPROGRESS">접수중</option>
            <option value="CONFIRMED">확정됨</option>
            <option value="CANCELLED">취소됨</option>
          </select>
          <button
            className="bg-orange-200 hover:bg-orange-300 active:bg-orange-400 text-orange-800
            py-1 px-2 rounded-md"
          >
            저장
          </button>
        </form>
      </td>
    </tr>
  );
}
