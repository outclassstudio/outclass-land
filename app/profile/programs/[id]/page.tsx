import { PROGRAM_STATUS } from "@/lib/contents/program";
import { getOneProgram } from "../../actions";
import Link from "next/link";

export default async function ProgramDetail({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const program = await getOneProgram(+id);

  return (
    <div className="mt-[80px] flex justify-center h-[calc(100vh-200px)]">
      <div className="w-screen md:w-[768px] flex flex-col p-5 gap-4">
        <div className="text-2xl sm:text-4xl font-bold mb-6">프로그램 상세</div>
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="font-bold">접수번호: 1234</div>
          <div className="w-full flex gap-2 sm:gap-4">
            <div className="flex flex-auto sm:gap-2 gap-1">
              <span className="flex-auto text-center p-2 sm:p-4 bg-neutral-500 text-white rounded-md text-sm sm:text-lg">
                이름
              </span>
              <span className="flex-auto text-center p-2 sm:p-4 bg-neutral-100 text-neutral-800 rounded-md text-sm sm:text-lg">
                {program?.name}
              </span>
            </div>
            <div className="flex flex-auto sm:gap-2 gap-1">
              <span className="flex-auto text-center p-2 sm:p-4 bg-neutral-500 text-white rounded-md text-sm sm:text-lg">
                연락처
              </span>
              <span className="flex items-center justify-center flex-auto p-2 sm:p-4 bg-neutral-100 text-neutral-800 rounded-md text-xs sm:text-lg">
                {program?.phone}
              </span>
            </div>
            <div className="flex flex-auto sm:gap-2 gap-1">
              <span className="flex-auto text-center p-2 sm:p-4 bg-neutral-500 text-white rounded-md text-sm sm:text-lg">
                성별
              </span>
              <span className="flex items-center justify-center flex-auto p-2 sm:p-4 bg-neutral-100 text-neutral-800 rounded-md text-xs sm:text-lg">
                {program?.sex}
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-auto sm:gap-2 gap-1">
              <span className="text-center p-2 sm:p-4 bg-neutral-500 text-white rounded-md text-sm sm:text-lg">
                프로그램
              </span>
              <span className="flex-auto text-center p-2 sm:p-4 bg-neutral-100 text-neutral-800 rounded-md text-sm sm:text-lg">
                {program?.program.title}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-center p-2 sm:p-4 bg-neutral-500 text-white rounded-md text-sm sm:text-lg">
                분류
              </span>
              <span className="flex-auto text-center p-2 sm:p-4 bg-neutral-100 text-neutral-800 rounded-md text-sm sm:text-lg">
                {program?.option}
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-auto sm:gap-2 gap-1">
              <span className="text-center p-2 sm:p-4 bg-neutral-500 text-white rounded-md text-sm sm:text-lg">
                신청날짜
              </span>
              <span className="flex-auto text-center p-2 sm:p-4 bg-neutral-100 text-neutral-800 rounded-md text-sm sm:text-lg">
                {program?.date}
              </span>
            </div>
            <div className="flex flex-auto sm:gap-2 gap-1">
              <span className="text-center p-2 sm:p-4 bg-neutral-500 text-white rounded-md text-sm sm:text-lg">
                신청시간
              </span>
              <span className="flex-auto text-center p-2 sm:p-4 bg-neutral-100 text-neutral-800 rounded-md text-sm sm:text-lg">
                {program?.dateTime}
              </span>
            </div>
          </div>
          <div className="flex sm:gap-2 gap-1">
            <span className="text-center p-2 sm:p-4 bg-neutral-500 text-white rounded-md text-sm sm:text-lg">
              요청사항
            </span>
            <span className="flex-auto text-center p-2 sm:p-4 bg-neutral-100 text-neutral-800 rounded-md text-sm sm:text-lg">
              {program?.subject}
            </span>
          </div>
          <div className="flex sm:gap-2 gap-1 mb-4">
            <span className="text-center p-2 sm:p-4 bg-neutral-500 text-white rounded-md text-sm sm:text-lg">
              접수상태
            </span>
            <span className="flex-auto text-center p-2 sm:p-4 bg-neutral-100 text-neutral-800 rounded-md text-sm sm:text-lg">
              {program?.status ? PROGRAM_STATUS[program.status].text : ""}
            </span>
          </div>
          <Link
            className="primary-btn p-2 text-sm sm:text-base"
            href={"/profile/programs"}
          >
            뒤로가기
          </Link>
        </div>
      </div>
    </div>
  );
}
