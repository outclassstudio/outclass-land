"use client";

import Link from "next/link";

export default function Footer() {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex justify-center items-center p-5">
      <div className="flex w-full sm:w-[768px] flex-col-reverse sm:flex-row justify-between items-center gap-2">
        <div className="flex flex-col justify-center items-start gap-1">
          <div>
            <div className="flex gap-2 items-center py-1">
              <Link className="text-neutral-800" href="/terms">
                <span
                  className="text-xs font-light text-neutral-800 dark:text-neutral-200"
                  onClick={handleTop}
                >
                  이메일 무단수집 거부
                </span>
              </Link>
              <span className="text-xs font-light text-neutral-800 dark:text-neutral-200">
                |
              </span>
              <Link className="text-neutral-800" href="/policy">
                <span
                  className="text-xs font-light text-neutral-800 dark:text-neutral-200"
                  onClick={handleTop}
                >
                  개인정보 이용 약관
                </span>
              </Link>
            </div>
          </div>
          <span className="text-xs font-light text-neutral-800 dark:text-neutral-200">
            사업자번호 : 102-80-03659
          </span>
          <div>
            <div
              className="flex gap-2 items-center *:text-xs *:font-light *:text-neutral-800
            dark:*:text-neutral-200"
            >
              <span>주소 : 노원구 동일로 1029 6F</span>
              <span>|</span>
              <span>문의 : outclassstudio@gmail.com</span>
            </div>
          </div>
          <div className="py-1 text-xs font-light text-neutral-800 dark:text-neutral-200">
            © Outclass Company All Rights Reserved.
          </div>
        </div>
        <div className="flex gap-2 *:text-neutral-800 dark:*:text-neutral-200">
          <Link href="/program">
            <span
              className="text-sm font-light hover:text-orange-500"
              onClick={handleTop}
            >
              프로그램
            </span>
          </Link>
          <Link href="/post">
            <span
              className="text-sm font-light hover:text-orange-500"
              onClick={handleTop}
            >
              포스트
            </span>
          </Link>
          <Link href="/about">
            <span
              className="text-sm font-light hover:text-orange-500"
              onClick={handleTop}
            >
              아웃클래스
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
