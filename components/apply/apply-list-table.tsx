"use client";

import { UserPrograms } from "@/app/profile/actions";
import ApplyContentBox from "./apply-content-box";

interface IUserProgramsProps {
  userPrograms: UserPrograms;
}

export default function AppliedListTable({ userPrograms }: IUserProgramsProps) {
  const categories = [
    "이름",
    "연락처",
    "성별",
    "신청 프로그램",
    "프로그램분류",
    "신청날짜",
    "신청시간",
    "요청사항",
    "접수상태",
  ];

  return (
    <div className="w-full table-xs">
      <table className="table table-xs">
        <thead>
          <tr className="bg-neutral-200 dark:bg-neutral-800 border-0">
            {categories.map((category, idx) => (
              <th key={idx} className="text-center">
                {category}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {userPrograms.map((program, idx) => (
            <ApplyContentBox key={idx} program={program} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

// {PROGRAM_STATUS[program.status]}
