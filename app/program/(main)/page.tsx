import ProgramList from "@/components/program/program-list";
import { dummyData } from "@/lib/dummy";
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
  //todo 캐싱전략 수정 필요
  // const initialPrograms = await getCashedPrograms();
  // const initialPrograms = await getInitialPrograms();
  const initialPrograms = dummyData;

  // const getData = () => {
  //   return new Promise((res) => setTimeout(res, 5000)).then(() => {
  //     return dummyData;
  //   });
  // };
  // const initialProducts = await getData();

  return (
    <div className="mt-[100px] flex flex-col items-center p-5">
      <div className="w-full sm:w-[640px] px-1 flex text-2xl sm:text-4xl font-bold mb-4">
        프로그램
      </div>
      <ProgramList initialPrograms={initialPrograms} />
    </div>
  );
}
