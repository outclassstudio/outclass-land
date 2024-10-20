"use client";

import { useThemeEffect } from "@/lib/hooks/useThemeState";
import ThemeToggleButton from "./theme-toggle-button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  useThemeEffect();

  return (
    <div
      className="w-full py-3 px-5 bg-white dark:bg-neutral-900 
      flex justify-center items-center fixed top-0 left-0 z-10"
    >
      <div className="w-[768px] flex justify-between items-center">
        <div className="flex items-center gap-7">
          <Link href={"/"}>
            <Image
              src={`https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/bf65bae9-4102-4836-eb97-9a5841ebd700/avatar`}
              alt=""
              width={40}
              height={40}
            />
          </Link>
          <div className="font-semibold text-lg *:cursor-pointer flex gap-5">
            <Link
              className={`hover:text-orange-400 ${
                pathname === "/program"
                  ? "text-orange-500"
                  : "text-neutral-800 dark:text-neutral-200"
              }`}
              href="/program"
            >
              프로그램
            </Link>
            <Link
              className={`hover:text-orange-400 ${
                pathname === "/post"
                  ? "text-orange-500"
                  : "text-neutral-800 dark:text-neutral-200"
              }`}
              href="/post"
            >
              포스트
            </Link>
            <Link
              className={`hover:text-orange-400 ${
                pathname === "/about"
                  ? "text-orange-500"
                  : "text-neutral-800 dark:text-neutral-200"
              }`}
              href="/about"
            >
              아웃클래스
            </Link>
          </div>
        </div>
        <ThemeToggleButton />
      </div>
    </div>
  );
}
