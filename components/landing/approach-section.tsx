import {
  ArrowRightIcon,
  SparklesIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

export default function ApproachSection() {
  const approaches = [
    {
      icon: StarIcon,
      title: "개인 맞춤형 분석",
      description:
        "상담 분석의 결과를 개인의 성격과 잠재력을 나타내는 도구로 활용합니다.",
      color: "indigo",
    },
    {
      icon: SparklesIcon,
      title: "성장 중심 해석",
      description:
        "개인의 노력과 선택에 따라 다른 삶을 살 수 있다는 점을 강조합니다.",
      color: "blue",
    },
    {
      icon: ArrowRightIcon,
      title: "실천적 가이드",
      description: "구체적이고 실용적인 성장 방법을 제시합니다.",
      color: "sky",
    },
  ];

  return (
    <div className="py-28 flex justify-center w-full bg-[#f8f8f8]">
      <div className="w-full sm:w-[640px] md:w-[768px] px-5 flex flex-col items-center">
        <h2
          className="text-4xl sm:text-5xl font-extrabold text-neutral-800 mb-4
          flex flex-col gap-2 w-full"
        >
          <span>아웃클래스의 차별화된</span>
          <span>접근법</span>
        </h2>
        <p className="w-full font-semibold text-lg sm:text-xl text-neutral-500 mb-12">
          우리는 맞춤형 상담과 컨설팅을 제공하고 있습니다.
        </p>
        <div className="w-full flex flex-col gap-5 items-center justify-center">
          {approaches.map((item, idx) => (
            <div
              key={idx}
              className={`w-full flex flex-col gap-5 p-14 rounded-xl bg-${item.color}-100`}
            >
              <div
                className={`text-${item.color}-500 font-bold text-2xl sm:text-3xl`}
              >
                {item.title}
              </div>
              <div
                className={`text-${item.color}-400 font-bold text-2xl sm:text-3xl`}
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
