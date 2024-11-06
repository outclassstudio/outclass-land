"use client";

import Link from "next/link";
import {
  ChevronDoubleRightIcon,
  PencilSquareIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { InitialPrograms } from "@/app/program/actions";
import { useState } from "react";

interface ListSelectProps {
  initialPrograms: InitialPrograms;
}

export default function ListSelectForm({ initialPrograms }: ListSelectProps) {
  const [id, setId] = useState(initialPrograms[0].id);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setId(+e.target.value);
  };

  return (
    <>
      <select
        onChange={handleSelect}
        className="input-style w-full h-10 text-neutral-400 mb-6"
      >
        {initialPrograms.map((program, idx) => (
          <option key={idx} value={program.id}>
            {program.title}
          </option>
        ))}
      </select>
      <div className="flex flex-col gap-1 sm:gap-2">
        <Link
          className="bg-orange-500 hover:bg-orange-600 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-md 
        text-white text-sm sm:text-base font-semibold flex gap-1 justify-center items-center"
          href={`/program/edit/${id}`}
        >
          프로그램수정
          <PencilSquareIcon className="size-4 sm:size-5" />
        </Link>
        <Link
          className="bg-orange-500 hover:bg-orange-600 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-md 
        text-white text-sm sm:text-base font-semibold flex gap-1 justify-center items-center"
          href={"/program/add"}
        >
          새프로그램
          <PlusIcon className="size-4 sm:size-5" />
        </Link>
        <Link
          className="bg-neutral-500 hover:bg-neutral-600 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-md 
        text-white text-sm sm:text-base font-semibold flex gap-1 justify-center items-center"
          href={"/program"}
        >
          목록으로
          <ChevronDoubleRightIcon className="size-4 sm:size-5" />
        </Link>
      </div>
    </>
  );
}
