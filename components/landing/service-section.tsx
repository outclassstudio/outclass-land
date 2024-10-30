import { BookOpenIcon, StarIcon, UserIcon } from "@heroicons/react/24/solid";

export default function ServicesSection() {
  const services = [
    {
      icon: StarIcon,
      title: "개인 컨설팅",
      description:
        "고객의 성격과 성향을 종합적으로 분석하여 최적의 성장 경로를 제시합니다.",
    },
    {
      icon: UserIcon,
      title: "그룹 워크샵",
      description:
        "팀이나 조직의 잠재력을 끌어올리는 맞춤형 프로그램을 제공합니다.",
    },
    {
      icon: BookOpenIcon,
      title: "온라인 코스",
      description:
        "언제 어디서나 자신의 성장을 도모할 수 있는 온라인 학습 플랫폼을 운영합니다.",
    },
  ];

  return (
    <div className="py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          아웃클래스와 함께하는 새로운 시작
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-12 h-12 text-[#f97316] mb-4" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
