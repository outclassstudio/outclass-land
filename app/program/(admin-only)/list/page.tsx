import ListSelectForm from "@/components/program/list/list-select-form";
import { getInitialPrograms } from "../../actions";

export default async function ProgramList() {
  const initialPrograms = await getInitialPrograms();

  return (
    <div className="w-full flex justify-center h-[calc(100vh-220px)]">
      <div className="w-full sm:w-[768px] flex flex-col p-5 gap-6">
        <div className="w-full flex text-5xl sm:text-4xl font-bold">
          프로그램 선택
        </div>
        <ListSelectForm initialPrograms={initialPrograms} />
      </div>
    </div>
  );
}
