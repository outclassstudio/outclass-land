import Button from "@/components/common/button";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="mt-[120px] mb-10 flex flex-col justify-center items-center p-4">
      <div className="flex flex-col gap-[80px] sm:gap-[120px] w-full sm:w-[640px] md:w-[768px]">
        <div className="flex flex-col gap-8 w-full md:gap-12">
          <div className="text-5xl font-bold whitespace-pre-wrap leading-[65px]">
            {`아웃클래스 \n: 당신의 잠재력을 깨우는 파트너`}
          </div>
          <div className="relative aspect-video">
            <Image
              src="https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/a3786944-6f32-4c5e-0f12-b4d6d39ac500/public"
              fill
              alt=""
              className="object-cover overflow-hidden rounded-2xl"
            />
          </div>
          <div className="px-1 text-lg whitespace-pre-wrap font-semibold md:text-2xl md:w-[80%]">
            {`아웃클래스는 개인의 성장과 발전을 위한 새로운 패러다임을 제시합니다. \n우리는 운명이 고정된 것이 아니라, 개인의 성격과 선택에 따라 변화할 수 있다는 믿음을 바탕으로 여러분의 성장을 돕고자 합니다.`}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 w-full md:gap-12">
          <div className="relative aspect-video sm:aspect-[9/12] sm:w-1/2">
            <Image
              src="https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/869be00a-fbf7-4b54-c02d-33c6fafcad00/public"
              fill
              alt=""
              className="object-cover overflow-hidden rounded-2xl"
            />
          </div>
          <div className="sm:w-1/2 flex flex-col gap-6 sm:gap-10 justify-center">
            <div className="text-4xl font-bold whitespace-pre-wrap leading-[50px]">
              {`우리의 비전`}
            </div>
            <div className="px-1 text-lg whitespace-pre-wrap md:text-2xl">
              {`"성격이 곧 운명이다"라는 고대 그리스 현자의 말씀처럼, 아웃클래스는 개인의 성격이 삶을 이끄는 중요한 요소라고 믿습니다.\n\n아웃클래스는 이러한 철학을 바탕으로 고객 여러분의 잠재력을 최대한 끌어올리는 것을 목표로 합니다.`}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full md:gap-12">
          <div className="text-4xl font-bold whitespace-pre-wrap leading-[50px]">
            {`우리의 방식`}
          </div>
          <div className="flex flex-col sm:flex-row gap-5">
            <div
              className="sm:w-1/3 p-8 border-[1px] border-neutral-100 shadow-sm rounded-lg
            flex flex-col gap-5"
            >
              <div className="text-xl font-semibold">개인 맞춤형 분석</div>
              <div className="text-neutral-600 dark:text-neutral-300">
                사주팔자를 단순한 운명의 지표가 아닌, 개인의 성격과 잠재력을
                나타내는 도구로 활용합니다.
              </div>
            </div>
            <div
              className="sm:w-1/3 p-8 border-[1px] border-neutral-100 shadow-sm rounded-lg
            flex flex-col gap-5"
            >
              <div className="text-xl font-semibold">성장 중심 해석</div>
              <div className="text-neutral-600 dark:text-neutral-300">
                같은 사주팔자라도 개인의 노력과 선택에 따라 다른 삶을 살 수
                있다는 점을 강조합니다.
              </div>
            </div>
            <div
              className="sm:w-1/3 p-8 border-[1px] border-neutral-100 shadow-sm rounded-lg
            flex flex-col gap-5"
            >
              <div className="text-xl font-semibold">실천적 가이드</div>
              <div className="text-neutral-600 dark:text-neutral-300">
                모든 사람에게는 큰 잠재력이 있음을 믿으며, 이를 실현할 수 있도록
                실천적인 방법을 제시합니다.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full md:gap-12">
          <div className="text-5xl font-bold whitespace-pre-wrap leading-[65px]">
            {`함께 만드는 미래`}
          </div>
          <div className="relative aspect-video">
            <Image
              src="https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/ebfe117a-c6b8-4c75-69f3-2d21d4925a00/public"
              fill
              alt=""
              className="object-cover overflow-hidden rounded-2xl"
            />
          </div>
          <div className="px-1 mb-8 text-lg whitespace-pre-wrap font-semibold md:text-2xl md:w-[80%]">
            {`아웃클래스는 고객과 함께 무한한 가능성의 세계로 나아갑니다. 우리는 단순한 진단을 넘어, 고객이 스스로 더 나은 미래를 개척할 수 있도록 지원합니다.\n\n지금, 아웃클래스와 함께 여러분의 잠재력을 최대한 발휘하는 새로운 여정을 시작해보세요.`}
          </div>
          <div className="flex justify-center w-full">
            <Link href={"/consult"} className="w-[200px]">
              <Button text="상담안내" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
