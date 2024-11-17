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
  type BGColors = {
    [key: string]: string;
  };
  const bgColors: BGColors = {
    rose: "hover:bg-rose-100",
    orange: "hover:bg-orange-100",
    green: "text-green-500",
  };

  return (
    <Link
      href={link}
      style={{ backgroundColor: bgColor }}
      className={`${bgHoverColor} text-neutral-700 border-2 w-full sm:aspect-square flex flex-col justify-center items-center gap-3
      shadow-md`}
    >
      <icon.comp style={{ color: iconColor }} className={`size-[15%]`} />
      <div className={`text-2xl sm:text-3xl font-bold text-${color}-500 mb-2`}>
        {title}
      </div>
      <div className={`text-${color}-400 text-sm sm:text-base`}>
        {description}
      </div>
    </Link>
  );
}
