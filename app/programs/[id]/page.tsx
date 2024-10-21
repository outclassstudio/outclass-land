import CostTable from "@/components/apply/cost-guide/cost-table";
import Button from "@/components/common/button";
import RecommendBox from "@/components/program/recommend-box";
import { dummyData } from "@/lib/dummy";
import Image from "next/image";
import Link from "next/link";

export default function ProgramsDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const [program] = dummyData.filter((data) => data.id === +id);

  return (
    <div className="mt-[100px] flex flex-col gap-10 justify-center items-center px-5">
      <div className="aspect-video sm:w-[640px] w-[384px] relative overflow-hidden">
        <Image
          src={`${program.photo}/public`}
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
                상담 안내
              </span>
            </div>
            <div className="text-5xl font-bold mb-5">사주명리 상담</div>
          </div>
          <div className=" mb-5 sm:w-[640px]">
            <div className="text-2xl font-semibold mb-4">
              성장의 방향을 함께 고민하고 해결합니다.
            </div>
            <div className="text-start whitespace-pre-wrap mb-8">
              {`사주팔자를 보는 이들 중 어떤 이들은 인간의 운명이란 정해져 있으며 바꿀 수 없는 것이라는 말을 합니다. 하지만 실제로 임상에 들어가보면 같은 사주팔자라도 질적으로 전혀 다른 삶을 누리는 이들이 많습니다. 이같은 차이를 어떻게 설명해야할까요? \n\n‘성격이 곧 운명이다’\n\n고대 그리스의 한 현자가 남긴 이 말은 운명론에 대해 다시금 생각해보게 합니다. 그는 당대의 통념과 달리 운명은 정해져 있는 게 아니며 그 사람이 만들어온 습관과 성격에 따라 변화될 수 있는 것으로 보았습니다. 즉 운명은 필연성이 아니라 사람의 성격에 따라 전개되는 가능성의 영역인 것이지요. 운명을 이런 방식으로 이해하게 되면 사주해석의 가능성이 좀 더 폭넓어진다는 것을 알 수 있습니다.`}
            </div>
            <div className="text-lg font-semibold">
              저희 아웃클래스는 사주명리를 통한 나 자신에 대한 깊은 이해를
              바탕으로 자신의 운명을 스스로 개척할 수 있도록 돕고자 합니다.
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
          <div>삶의 방향이 막막해서 고민이신 분</div>
          <div>중요한 선택의 기로에서 고민이신 분</div>
          <div>나의 성향과 성격에 대해 알아보고 싶은 분</div>
        </div>
      </div>
      <div className="flex flex-col gap-5 mb-5 w-full sm:w-[640px]">
        <div className="text-2xl font-semibold">비용 안내</div>
        <CostTable />
      </div>
      <div className="flex flex-col mb-5 w-full sm:w-[640px]">
        <div className="text-2xl font-semibold mb-5 ">참여자 후기</div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-5">
          {program.recommend!.map((data) => (
            <RecommendBox key={data.id} data={data} />
          ))}
        </div>
      </div>
      <Link href={"/apply"} className="w-[200px]">
        <Button text="상담신청" />
      </Link>
    </div>
  );
}
