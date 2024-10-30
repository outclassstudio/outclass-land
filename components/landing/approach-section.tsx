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
    },
    {
      icon: SparklesIcon,
      title: "성장 중심 해석",
      description:
        "개인의 노력과 선택에 따라 다른 삶을 살 수 있다는 점을 강조합니다.",
    },
    {
      icon: ArrowRightIcon,
      title: "실천적 가이드",
      description: "구체적이고 실용적인 성장 방법을 제시합니다.",
    },
  ];

  return (
    <div className="w-screen py-20 bg-gray-50">
      <div className="px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          우리의 접근 방식
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {approaches.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <item.icon className="w-12 h-12 text-[#f97316] mb-4" />
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
