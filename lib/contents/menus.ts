import { ListBulletIcon, UserIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon, FolderIcon } from "@heroicons/react/24/solid";

export const HEADER_MENU = [
  { menu: "프로그램", link: "/program" },
  { menu: "포스트", link: "/post" },
  { menu: "아웃클래스", link: "/about" },
];

export const DROPDOWN_MENU = [
  { menu: "프로필수정", link: "/profile/edit", icon: UserIcon },
  { menu: "상담내역", link: "/profile/programs", icon: ListBulletIcon },
];

export const ADMIN_MENUS = [
  {
    title: "프로그램",
    description: "프로그램 추가 / 수정 / 삭제",
    link: "/program/list",
    icon: { comp: FolderIcon },
    color: "rose",
    bgColor: "bg-rose-50",
    bgHoverColor: "bg-rose-100",
    iconColor: "text-rose-700",
  },
  {
    title: "포스트",
    description: "포스트 추가 / 수정 / 삭제",
    link: "/post/list",
    icon: { comp: BookOpenIcon },
    color: "orange",
    bgColor: "bg-orange-50",
    bgHoverColor: "bg-orange-100",
    iconColor: "text-orange-700",
  },
];
