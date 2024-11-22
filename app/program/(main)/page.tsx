import ProgramList from "@/components/program/program-list";
import { getInitialPrograms } from "../actions";
import Link from "next/link";
import { PencilSquareIcon, PlusIcon } from "@heroicons/react/24/outline";
import { getUserRole } from "@/apis/user/actions";
// import { unstable_cache as nextCache, revalidateTag } from "next/cache";

//cache 사용 -> 함수는 return이 반드시 있어야 함
// const getCashedPrograms = nextCache(getInitialProducts, ["home-products"], {
//   tags: ["products"],
//   revalidate: 60,
// });

export const metadata = {
  title: "프로그램",
};

export const dynamic = "force-dynamic";

export default async function Programs() {
  const getProgramDelay = async () => {
    return new Promise((res) => setTimeout(res, 5000)).then(() => {
      return getInitialPrograms();
    });
  };

  //todo 캐싱전략 수정 필요
  // const initialPrograms = await getCashedPrograms();
  // const initialPrograms = await getInitialPrograms();
  const initialPrograms = await getProgramDelay();
  const userRole = await getUserRole();

  return (
    <div className="mt-[80px] flex flex-col items-center min-h-[calc(100vh-200px)]">
      <div className="w-screen md:w-[768px] flex flex-col justify-center items-center p-5">
        <div className="w-full px-1 flex justify-between items-center text-2xl sm:text-4xl font-bold mb-6">
          <span>프로그램</span>
          {userRole?.role === "ADMIN" ? (
            <div className="flex gap-1 sm:gap-2">
              <Link
                className="bg-orange-500 hover:bg-orange-600 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-md 
            text-white text-xs sm:text-sm font-semibold flex gap-1 justify-center items-center"
                href={"/program/add"}
              >
                새프로그램
                <PlusIcon className="size-4 sm:size-5" />
              </Link>
              <Link
                className="bg-orange-500 hover:bg-orange-600 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-md 
            text-white text-xs sm:text-sm font-semibold flex gap-1 justify-center items-center"
                href={"/program/list"}
              >
                프로그램수정
                <PencilSquareIcon className="size-4 sm:size-5" />
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
        <ProgramList initialPrograms={initialPrograms} />
      </div>
    </div>
  );
}
