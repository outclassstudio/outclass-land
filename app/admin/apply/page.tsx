import AppliedListTable from "@/components/apply/apply-list-table";
import { getAppliedPrograms } from "./actions";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

export default async function ApplyList() {
  const appliedPrograms = await getAppliedPrograms();

  return (
    <div className="mt-[80px] w-full flex justify-center min-h-[calc(100vh-200px)]">
      <div className="w-full flex flex-col items-center p-5">
        <div className="w-full flex justify-start items-center text-2xl sm:text-4xl font-bold mb-6">
          <span>상담 내역</span>
        </div>
        {appliedPrograms ? (
          <AppliedListTable userPrograms={appliedPrograms} />
        ) : (
          <div className="w-full h-full flex gap-2 justify-center items-center">
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
