"use client";

import { UserType } from "@/apis/user/actions";
import {
  AdjustmentsHorizontalIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import UserProfileBox from "./user-profile-box";
import LoginBox from "./login-box";
import { DROPDOWN_MENU } from "@/lib/constants";
import { logOut } from "@/lib/login";

interface IDropDownProps {
  handleDropdownOpen: () => void;
  user: UserType;
}

export default function UserDropdown({
  handleDropdownOpen,
  user,
}: IDropDownProps) {
  return (
    <>
      <div
        className="p-3 fixed right-0 top-0 shadow-md z-10 bg-white dark:bg-neutral-900 rounded-l-xl
      flex flex-col gap-3 w-[300px] h-screen animate-slideinX"
      >
        {user ? (
          <>
            <div className="border-b pb-3 dark:border-neutral-600">
              <UserProfileBox
                user={user}
                handleDropdownOpen={handleDropdownOpen}
              />
            </div>
            <div className="border-b dark:border-neutral-600 pb-3 flex flex-col gap-1">
              {DROPDOWN_MENU.map((item, idx) => (
                <Link href={item.link} className="header-link-style" key={idx}>
                  <item.icon className="size-5" /> {item.menu}
                </Link>
              ))}
            </div>
            {user.role === "ADMIN" ? (
              <div className="border-b dark:border-neutral-600 pb-3 flex flex-col gap-1">
                <Link href={"/admin"} className="header-link-style">
                  <AdjustmentsHorizontalIcon className="size-5" /> 관리자
                </Link>
              </div>
            ) : (
              ""
            )}
            <form action={logOut} className="header-link-style cursor-pointer">
              <button className="flex gap-2 items-center w-full">
                <PowerIcon className="size-5" /> 로그아웃
              </button>
            </form>
          </>
        ) : (
          <LoginBox handleDropdownOpen={handleDropdownOpen} />
        )}
      </div>
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-neutral-500 opacity-20"
        onClick={handleDropdownOpen}
      />
    </>
  );
}
