"use client";

import { PROGRAM_STATUS } from "@/lib/contents/program";
import { StatusOptions } from "@/lib/types/apply";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

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

export default function UserProgramBox({ program }: AppliedProgramProps) {
  const router = useRouter();

  const handleMoveToDetail = () => {
    router.push(`/profile/programs/${program.id}`);
  };

  return (
    <tr className="*:text-center border-neutral-300">
      <td className="text-nowrap">{program.name}</td>
      <td className="">{program.program.title}</td>
      <td className="">{program.option}</td>
      <td className="">{program.date}</td>
      <td className="">{program.dateTime}</td>
      <td className="">
        <div
          className={`text-xs border-none cursor-grab p-1
            rounded-md ${PROGRAM_STATUS[program.status].color}`}
        >
          {PROGRAM_STATUS[program.status].text}
        </div>
      </td>
      <td className="flex justify-center items-center">
        <MagnifyingGlassIcon
          onClick={handleMoveToDetail}
          className="size-4 m-1 cursor-pointer"
        />
      </td>
    </tr>
  );
}
