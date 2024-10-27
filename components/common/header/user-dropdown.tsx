"use client";

import { UserType } from "@/apis/user/actions";
import {
  ListBulletIcon,
  PowerIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import UserProfileBox from "./user-profile-box";
import LoginBox from "./login-box";

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
        className="p-3 absolute top-10 right-0 shadow-md z-10 bg-white dark:bg-neutral-900 rounded-lg
      flex flex-col gap-3 w-[300px]"
      >
        <div className="border-b pb-3">
          {user ? (
            <UserProfileBox
              user={user}
              handleDropdownOpen={handleDropdownOpen}
            />
          ) : (
            <LoginBox />
          )}
        </div>
        <div className="border-b pb-3 flex flex-col gap-1">
          <Link href="/profile/edit" className="header-link-style">
            <UserIcon className="size-5" /> 프로필수정
          </Link>
          <Link href="/profile/products" className="header-link-style">
            <ListBulletIcon className="size-5" /> 상담내역
          </Link>
        </div>
        <Link href="/profile" className="header-link-style">
          <PowerIcon className="size-5" /> 로그아웃
        </Link>
      </div>
      <div
        className="fixed top-0 left-0 w-screen h-screen opacity-0"
        onClick={handleDropdownOpen}
      />
    </>
  );
}
