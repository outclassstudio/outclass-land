import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function LoginBox() {
  return (
    <Link
      href={"/login"}
      className="flex gap-3 items-center p-1 hover:bg-neutral-100 rounded-md"
    >
      <UserIcon className="size-11 text-neutral-600 cursor-pointer" />
      <div className="flex flex-col w-full">
        <span className="font-semibold text-neutral-800">로그인 해주세요</span>
      </div>
      <ChevronRightIcon className="size-7 text-neutral-500" />
    </Link>
  );
}
