import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

interface IMenuBoxProps {
  link: string;
  icon: {
    comp: ForwardRefExoticComponent<
      Omit<SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
      } & RefAttributes<SVGSVGElement>
    >;
  };
  title: string;
  description: string;
  color: string;
  bgColor: string;
  bgHoverColor: string;
  iconColor: string;
}

export default function AdminMenuBox({
  link,
  icon,
  title,
  description,
  color,
  bgColor,
  bgHoverColor,
  iconColor,
}: IMenuBoxProps) {
  return (
    <Link
      href={link}
      className={`text-neutral-700 border-2 w-full sm:aspect-square flex flex-col justify-center items-center gap-3
      shadow-md ${bgColor} hover:${bgHoverColor}`}
    >
      <icon.comp className={`size-[15%] ${iconColor}`} />
      <div className={`text-2xl sm:text-3xl font-bold text-${color}-500 mb-2`}>
        {title}z
      </div>
      <div className={`text-${color}-400 text-sm sm:text-base`}>
        {description}
      </div>
    </Link>
  );
}
