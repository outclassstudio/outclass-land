import Button from "@/components/common/button";
import SimpleHeader from "@/components/common/simple-header";
import TabBar from "@/components/common/tab-bar";
import RecommendBox from "@/components/program/recommend-box";
import { dummyData } from "@/lib/dummy";
import Image from "next/image";

export default function ProgramsDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const [program] = dummyData.filter((data) => data.id === +id);
  return (
    <div className="flex flex-col gap-10">
      <SimpleHeader text="" url="" />
      <div>
        <div className="aspect-video mt-[80px] sm:w-[640px] w-[384px] relative overflow-hidden">
          <Image
            src={`${program.photo}/public`}
            className="object-cover"
            fill
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center w-full mb-5">
        <div className="flex flex-col gap-3 w-full mb-5">
          <div>
            <span className="rounded-md bg-neutral-600 px-2 py-1 text-sm">
              {program.category}
            </span>
          </div>
          <div className="text-4xl font-bold">{program.title}</div>
          <div className="text-lg mb-5">{program.description}</div>
        </div>
        <Button text="신청하기" />
      </div>
      <div className="flex flex-col gap-5 mb-5">
        <div className="text-2xl font-semibold shadow-lg">
          이런 분에게 추천해요
        </div>
        <div
          className="bg-neutral-800 rounded-lg px-5 py-7 text-lg
        flex flex-col gap-3 items-center justify-center"
        >
          <div>삶의 방향이 막막해서 고민이신 분</div>
          <div>중요한 선택의 기로에서 고민이신 분</div>
          <div>나의 성향과 성격에 대해 알아보고 싶은 분</div>
        </div>
      </div>
      <div className="flex flex-col mb-5">
        <div className="text-2xl font-semibold mb-5">참여자 후기</div>
        <div className="grid grid-cols-2 gap-5">
          {program.recommend!.map((data) => (
            <RecommendBox key={data.id} data={data} />
          ))}
        </div>
      </div>
      <div className="mb-24">
        <Button text="신청하기" />
      </div>
      <TabBar />
    </div>
  );
}
