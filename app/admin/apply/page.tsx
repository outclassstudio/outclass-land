import AppliedListTable from "@/components/apply/apply-list-table";
import { getAppliedPrograms } from "./actions";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import NoContents from "@/components/common/no-contents";

export default async function ApplyList() {
  const appliedPrograms = await getAppliedPrograms();

  return (
    <div className="mt-[80px] w-full flex justify-center min-h-[calc(100vh-200px)]">
      <div className="w-full flex flex-col items-center p-5">
        <div className="w-full flex justify-start items-center text-2xl sm:text-4xl font-bold mb-6">
          <span>상담 내역</span>
        </div>
        {appliedPrograms.length ? (
          <AppliedListTable userPrograms={appliedPrograms} />
        ) : (
          <NoContents text={"신청한 상담이 없어요"} />
        )}
      </div>
    </div>
  );
}
