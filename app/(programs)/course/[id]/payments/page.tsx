import Link from "next/link";

export default function PaymentsInfo() {
  return (
    <div className="mt-[80px] flex justify-center items-center h-[calc(100vh-200px)]">
      <div className="w-full sm:w-[768px] flex flex-col p-5">
        <div className="text-3xl sm:text-4xl font-extrabold flex flex-col gap-1 mb-12">
          <span>입금을 완료하시면 </span>
          <span>프로그램 신청이 최종 확정됩니다.</span>
        </div>
        <div className="text-2xl sm:text-3xl font-bold mb-4">입금계좌</div>
        <ul className="text-xl sm:text-2xl flex mb-12">
          <li className="">우리은행 : 1002-247-724407 {"(예금주 : 이민형)"}</li>
        </ul>
        <div className="font-bold mb-2">
          프로그램 신청이 최종 확정되면 확정 문자를 고객님의 연락처로
          보내드립니다.
        </div>
        <div className="font-bold text-red-500 mb-12">
          24시간 이내에 입금 확인이 안 될 시 자동으로 신청이 취소됩니다.
        </div>
        <div className="w-full flex justify-center">
          <Link
            href="/"
            className="bg-orange-500 hover:bg-orange-600 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-md 
            text-white font-semibold flex justify-center items-center w-[100px]"
          >
            홈으로
          </Link>
        </div>
      </div>
    </div>
  );
}
