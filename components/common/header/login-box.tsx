import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function LoginBox({
  handleDropdownOpen,
}: {
  handleDropdownOpen: () => void;
}) {
  return (
    <div className="flex items-center justify-between border-b pb-3 dark:border-neutral-600">
      <Link
        href={"/login"}
        className="w-full flex gap-3 items-center p-1 hover:bg-neutral-100 rounded-md"
      >
        <UserIcon className="size-11 text-neutral-600 dark:text-neutral-400 cursor-pointer" />
        <div className="flex flex-col w-full">
          <span className="font-semibold text-neutral-800 dark:text-neutral-200">
            로그인 해주세요
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
