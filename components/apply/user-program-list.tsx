import { UserPrograms } from "@/app/profile/actions";
import UserProgramBox from "./user-program-box";

interface IUserProgramsProps {
  userPrograms: UserPrograms;
}

export default function UserProgramList({ userPrograms }: IUserProgramsProps) {
  const categories = [
    "이름",
    "신청 프로그램",
    "프로그램분류",
    "신청날짜",
    "신청시간",
    "접수상태",
    "더보기",
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
            <UserProgramBox key={idx} program={program} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
