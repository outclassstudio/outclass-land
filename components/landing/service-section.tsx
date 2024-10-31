import { BookOpenIcon, StarIcon, UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      icon: StarIcon,
      title: "개인 컨설팅",
      description:
        "고객의 성격과 성향을 종합적으로 분석하여 최적의 성장 경로를 제시합니다.",
      color: "rose",
    },
    {
      icon: BookOpenIcon,
      title: "온라인 코스",
      description:
        "언제 어디서나 자신의 성장을 도모할 수 있는 온라인 상담 프로그램을 운영합니다.",
      color: "orange",
    },
    {
      icon: UserIcon,
      title: "그룹 워크샵",
      description:
        "팀이나 조직의 잠재력을 끌어올리는 맞춤형 프로그램을 제공합니다.",
      color: "amber",
    },
  ];

  return (
    <div className="py-28 px-5 flex justify-center w-full sm:w-[640px] md:w-[768px]">
      <div className="flex flex-col items-center">
        <h2
          className="text-4xl sm:text-5xl font-extrabold text-neutral-800 mb-4
          flex flex-col items-center gap-2 w-full"
        >
          <span>아웃클래스와 함께하는</span>
          <span>새로운 시작</span>
        </h2>
        <p className="w-full flex justify-center font-semibold text-lg sm:text-xl text-neutral-500 mb-16">
          우리는 맞춤형 상담과 컨설팅을 제공하고 있습니다.
        </p>
        <div className="w-full flex flex-col gap-5 items-center justify-center">
          {services.map((item, idx) => (
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

{
  /* <div className="w-full flex flex-col gap-1 p-14 rounded-xl bg-orange-100">
            <div className="text-orange-500 font-bold text-2xl sm:text-3xl">
              {services[1].title}
            </div>
            <div className="text-orange-400 font-bold text-2xl sm:text-3xl">
              {services[1].description}
            </div>
          </div>
          <div className="w-full flex flex-col gap-1 p-14 rounded-xl bg-amber-100">
            <div className="text-amber-500 font-bold text-2xl sm:text-3xl">
              {services[2].title}
            </div>
            <div className="text-amber-400 font-bold text-2xl sm:text-3xl">
              {services[2].description}
            </div>
          </div> */
}
