"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggleButton from "./theme-toggle-button";
import { UserIcon } from "@heroicons/react/24/solid";
import UserDropdown from "./user-dropdown";
import { usePathname } from "next/navigation";
import { useThemeEffect } from "@/lib/hooks/useThemeState";
import { useEffect, useState } from "react";
import { UserType } from "@/apis/user/actions";
import { HEADER_MENU } from "@/lib/contents/menus";

interface IUserProps {
	user: UserType;
}

export default function HeaderContent({ user }: IUserProps) {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);
	const pathname = usePathname();
	useThemeEffect();

	const handleDropdownOpen = () => {
		setIsDropdownOpen((prev) => !prev);
	};

	const updateScroll = () => {
		setScrollPosition(window.scrollY || document.documentElement.scrollTop);
	};

	useEffect(() => {
		window.addEventListener("scroll", updateScroll);
	});

	return (
		<div
			className={`w-full flex justify-center py-3 ${
				scrollPosition > 70 ? "shadow-sm" : ""
			}`}
		>
			<div className="w-[768px] px-5 flex justify-between items-center">
				<div className="flex items-center gap-4 sm:gap-7">
					<Link href={"/"} className="select-none">
						<Image
							src={`https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/bf65bae9-4102-4836-eb97-9a5841ebd700/avatar`}
							alt=""
							width={40}
							height={40}
						/>
					</Link>
					<div className="font-semibold *:cursor-pointer flex gap-3 sm:gap-5">
						{HEADER_MENU.map((data, idx) => (
							<Link
								className={`hover:text-orange-400 text-base sm:text-lg select-none transition-colors duration-500 ${
									pathname === data.link
										? "text-orange-500"
										: "text-neutral-800 dark:text-neutral-200"
								}`}
								href={data.link}
								key={idx}
							>
								{data.menu}
							</Link>
						))}
					</div>
				</div>
				<div className="flex gap-2 items-center relative select-none">
					<ThemeToggleButton />
					{user?.avatar ? (
						<Image
							width={32}
							height={32}
							src={`${user.avatar!}/avatar`}
							alt={user.username}
							className="rounded-full cursor-pointer"
							onClick={handleDropdownOpen}
						/>
					) : (
						<UserIcon
							className="size-8 text-neutral-600 cursor-pointer"
							onClick={handleDropdownOpen}
						/>
					)}
					{isDropdownOpen ? (
						<UserDropdown handleDropdownOpen={handleDropdownOpen} user={user} />
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
}
