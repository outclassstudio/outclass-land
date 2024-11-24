"use client";

import { UserPrograms } from "@/app/profile/actions";
import ApplyContentBox from "./apply-content-box";
import { PROGRAM_TABLE_CATEGORIES } from "@/lib/contents/program";

interface IUserProgramsProps {
  userPrograms: UserPrograms;
}

export default function AppliedListTable({ userPrograms }: IUserProgramsProps) {
  return (
    <div className="w-full table-xs">
      <table className="table table-xs">
        <thead>
          <tr className="bg-neutral-200 dark:bg-neutral-800 border-0">
            {PROGRAM_TABLE_CATEGORIES.map((category, idx) => (
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
