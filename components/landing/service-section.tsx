import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon, StarIcon, UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      icon: StarIcon,
      title: "개인 컨설팅",
      description:
        "고객의 성격과 성향을 종합적으로 분석하여 최적의 성장 경로를 제시합니다.",
      bgColor: "bg-rose-100",
      textMain: "text-rose-500",
      textSub: "text-rose-400",
    },
    {
      icon: BookOpenIcon,
      title: "온라인 상담",
      description:
        "언제 어디서나 자신의 성장을 도모할 수 있는 온라인 상담 프로그램을 운영합니다.",
      bgColor: "bg-orange-100",
      textMain: "text-orange-500",
      textSub: "text-orange-400",
    },
    {
      icon: UserIcon,
      title: "그룹 워크샵",
      description:
        "팀이나 조직의 잠재력을 끌어올리는 맞춤형 프로그램을 제공합니다.",
      bgColor: "bg-amber-100",
      textMain: "text-amber-500",
      textSub: "text-amber-400",
    },
  ];

  return (
    <div className="py-28 px-5 flex justify-center w-full sm:w-[640px] md:w-[768px]">
      <div className="flex flex-col items-center">
        <h2
          className="text-4xl sm:text-5xl font-extrabold text-neutral-800 dark:text-neutral-200 
          flex flex-col items-center gap-2 w-full mb-6"
        >
          <span className="text-xl sm:text-2xl mb-4 text-neutral-500">
            💡 서비스
          </span>
          <span>아웃클래스와 함께하는</span>
          <span>새로운 시작</span>
        </h2>
        <p
          className="w-full flex justify-center font-semibold text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 
          mb-16 text-center"
        >
          아웃클래스의 프로그램과 함께 문제를 해결하고 새로운 삶을 시작해보세요.
        </p>
        <div className="w-full flex flex-col gap-5 items-center justify-center">
          {services.map((item, idx) => (
            <div
              key={idx}
              className={`w-full flex flex-col gap-2 p-14 rounded-xl ${item.bgColor}`}
            >
              <div
                className={`font-bold text-2xl sm:text-3xl ${item.textMain}`}
              >
                {item.title}
              </div>
              <div
                className={`font-bold text-2xl sm:text-3xl mb-2 ${item.textSub}`}
              >
                {item.description}
              </div>
              <Link
                href={"/program"}
                className="flex gap-1 items-center text-neutral-500 hover:text-neutral-600 font-semibold
                text-sm sm:text-base"
              >
                더 알아보기 <ChevronRightIcon className="size-4" />
              </Link>
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
