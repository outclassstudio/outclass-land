export default function PromblemSection() {
  return (
    <div className="w-screen bg-[#fffae0] flex justify-center">
      <div className="flex flex-col px-7 py-32 w-full sm:w-[768px]">
        <h1
          className="text-2xl md:text-4xl font-bold mb-8 drop-shadow-sm
          whitespace-pre-wrap sm:whitespace-normal"
        >
          현대인의 <span className="text-rose-500">78%</span>가 번아웃을
          경험하고
          <br />
          <span className="text-orange-500">68%</span>가 소통 단절의 어려움을
          겪고 있습니다.
        </h1>
        <p className="font-semibold flex flex-col text-sm sm:text-lg text-neutral-500">
          <span>직장인 78% 번아웃 경험</span>
          <span>MZ세대 직장인 91%가 "사무실 우울증" 경험</span>
          <span>20대의 73%가 '함께 있어도 외로움' 현상 경험</span>
          <span>우울증진료환자 100만명 돌파(국민건강보험공단, 2023년)</span>
          <span>...</span>
        </p>
      </div>
    </div>
  );
}
