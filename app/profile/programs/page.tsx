import getSession from "@/lib/session";
import { notFound } from "next/navigation";
import { getUserPrograms } from "../actions";
import AppliedListTable from "@/components/apply/apply-list-table";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import UserProgramList from "@/components/apply/user-program-list";

export const metadata = {
  title: "상담내역",
};

export default async function UserProducts() {
  const session = await getSession();
  const id = session.id;
  if (!session.id) return notFound();
  const userPrograms = await getUserPrograms(id!);

  return (
    <div className="mt-[80px] w-full flex justify-center min-h-[calc(100vh-200px)]">
      <div className="w-screen md:w-[768px] flex flex-col items-center p-5">
        <div className="w-full flex justify-start items-center text-2xl sm:text-4xl font-bold mb-6">
          <span>상담 내역</span>
        </div>
        {userPrograms ? (
          <UserProgramList userPrograms={userPrograms} />
        ) : (
          <div className="w-full flex gap-2 justify-center items-center h-[calc(100vh-310px)]">
            <ExclamationTriangleIcon className="size-10 text-amber-500" />
            <span className="text-2xl sm:text-3xl font-bold">
              참여한 프로그램이 없어요
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
