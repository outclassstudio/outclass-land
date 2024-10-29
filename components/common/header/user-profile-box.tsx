import { UserType } from "@/apis/user/actions";
import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

interface IDropDownProps {
  handleDropdownOpen: () => void;
  user: UserType;
}

export default function UserProfileBox({
  handleDropdownOpen,
  user,
}: IDropDownProps) {
  return (
    <div className="flex items-center justify-between">
      <Link
        href={"/profile"}
        className="w-full flex gap-3 items-center p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md"
      >
        {user?.avatar ? (
          <Image
            width={44}
            height={44}
            src={`${user.avatar!}/avatar`}
            alt={user.username}
            className="rounded-full cursor-pointer"
            onClick={handleDropdownOpen}
          />
        ) : (
          <UserIcon
            className="size-11 text-neutral-600 cursor-pointer"
            onClick={handleDropdownOpen}
          />
        )}
        <div className="flex flex-col w-full">
          <div className="flex gap-2 items-center">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              {user?.username}
            </span>
            <span className="bg-orange-500 text-white rounded-md text-xs p-1">
              {user?.role === "ADMIN" ? "관리자" : "유저"}
            </span>
          </div>
          <span className="font-light text-sm text-neutral-600 dark:text-neutral-400">
            {user?.email}
          </span>
        </div>
        <ChevronRightIcon className="size-7 text-neutral-500" />
      </Link>
      <div
        className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md cursor-pointer"
        onClick={handleDropdownOpen}
      >
        <XMarkIcon className="size-5 text-neutral-500" />
      </div>
    </div>
  );
}
