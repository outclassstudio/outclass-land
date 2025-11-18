import ListSelectForm from "@/components/program/list/list-select-form";
import { getInitialPrograms } from "../../actions";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import NoContents from "@/components/common/no-contents";

export default async function ProgramList() {
  const initialPrograms = await getInitialPrograms();

  return (
    <div className="w-full flex justify-center h-[calc(100vh-220px)]">
      <div className="w-screen md:w-[768px] flex flex-col p-5 gap-6">
        <div className="w-full flex text-3xl sm:text-4xl font-bold">
          프로그램 선택
        </div>
        {initialPrograms.length ? (
          <ListSelectForm initialPrograms={initialPrograms} />
        ) : (
          <NoContents text={"등록된 프로그램이 없어요"} />
        )}
      </div>
    </div>
  );
}
