import ButtonBox from "./button-box";

export default function HeroSection() {
  return (
    <div className="w-screen py-40">
      <div className="text-center flex flex-col items-center px-5">
        <h1
          className="text-5xl md:text-6xl font-extrabold mb-8 drop-shadow-sm
        bg-gradient-to-r from-orange-400 to-rose-500 text-transparent bg-clip-text
        whitespace-pre-wrap sm:whitespace-normal"
        >
          {`당신의 잠재력을\n깨우는 파트너`}
        </h1>
        <p className="font-semibold text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 mb-10 whitespace-pre-wrap">
          {`길을 잃어 막막할 때, 선택의 기로에서 고민할 때,\n자신을 발견하고 성장할 수 있도록 도와드립니다.
          `}
        </p>
        <ButtonBox />
      </div>
    </div>
  );
}
