"use client";

import { useThemeEffect } from "@/lib/hooks/useThemeState";
import ThemeToggleButton from "./theme-toggle-button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  useThemeEffect();

  return (
    <div
      className="w-full py-3 px-5 bg-white dark:bg-neutral-900 
      flex justify-center items-center"
    >
      <div className="w-[768px] flex justify-between items-center">
        <div className="flex items-center gap-7">
          <Image
            src={`https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/bf65bae9-4102-4836-eb97-9a5841ebd700/avatar`}
            alt=""
            width={40}
            height={40}
          />
          <div className="font-semibold text-lg *:cursor-pointer flex gap-5">
            <Link
              className="text-neutral-800 hover:text-orange-500"
              href="/consult"
            >
              상담안내
            </Link>
            <Link
              className="text-neutral-800 hover:text-orange-500"
              href="/post"
            >
              포스트
            </Link>
            <Link
              className="text-neutral-800 hover:text-orange-500"
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
