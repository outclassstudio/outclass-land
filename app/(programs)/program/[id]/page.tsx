import CostTable from "@/components/apply/cost-guide/cost-table";
import Button from "@/components/common/button";
import RecommendBox from "@/components/program/recommend-box";
import { PROGRAM_LIST } from "@/lib/contents/program";
import Image from "next/image";
import Link from "next/link";
import { getProgram } from "../actions";

export default async function ProgramDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const program = await getProgram(+id);
  const [programDetail] = PROGRAM_LIST.filter((program) => program.id === +id);

  return (
    <div className="mt-[100px] flex flex-col gap-10 justify-center items-center px-5">
      <div className="aspect-video sm:w-[640px] w-[384px] relative overflow-hidden">
        <Image
          src={`${program?.photo}/public`}
          className="object-cover"
          fill
          alt=""
        />
      </div>
      <div className="flex flex-col gap-5 items-center w-full mb-5">
        <div className="flex flex-col gap-3 w-full mb-5 items-center">
          <div className="w-full sm:w-[640px] flex flex-col items-start gap-3">
            <div>
              <span className="rounded-md bg-neutral-600 px-2 py-1 text-sm text-white">
                {programDetail.header}
              </span>
            </div>
            <div className="text-5xl font-bold mb-5">{program?.title}</div>
          </div>
          <div className=" mb-5 sm:w-[640px]">
            <div className="text-2xl font-semibold mb-4">
              {program?.description}
            </div>
            <div className="text-start whitespace-pre-wrap mb-8">
              {programDetail.description}
            </div>
            <div className="text-lg font-semibold">
              {programDetail.mainSentence}
            </div>
          </div>
        </div>
        <Link href={`${[id]}/apply`} className="w-[200px]">
          <Button text="상담신청" />
        </Link>
      </div>
      <div className="flex flex-col gap-5 mb-5 w-full sm:w-[640px]">
        <div className="text-2xl font-semibold">이런 분에게 추천해요</div>
        <div
          className="bg-neutral-100 dark:bg-neutral-800 rounded-lg px-5 py-7 text-lg
        flex flex-col gap-3 items-center justify-center shadow-md font-semibold"
        >
          {programDetail.recommend.map((ment, idx) => (
            <div key={idx}>{ment}</div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 mb-5 w-full sm:w-[640px]">
        <div className="text-2xl font-semibold">비용 안내</div>
        <CostTable />
      </div>
      <div className="flex flex-col mb-5 w-full sm:w-[640px]">
        <div className="text-2xl font-semibold mb-5 ">참여자 후기</div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-5">
          {programDetail.reviews!.map((data) => (
            <RecommendBox key={data.id} data={data} />
          ))}
        </div>
      </div>
      <Link href={`${[id]}/apply`} className="w-[200px]">
        <Button text="상담신청" />
      </Link>
    </div>
  );
}
