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
}

export default function AdminMenuBox({
  link,
  icon,
  title,
  description,
  color,
}: IMenuBoxProps) {
  return (
    <Link
      href={link}
      className={`text-neutral-700 border-2 w-full sm:aspect-square flex flex-col justify-center items-center gap-3
      shadow-md bg-${color}-50 hover:bg-${color}-100 `}
    >
      <icon.comp className={`size-[15%] text-${color}-700`} />
      <div className={`text-2xl sm:text-3xl font-bold text-${color}-500 mb-2`}>
        {title}
      </div>
      <div className={`text-${color}-400 text-sm sm:text-base`}>
        {description}
      </div>
    </Link>
  );
}
