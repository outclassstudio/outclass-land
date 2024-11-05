"use client";

import EditInput from "@/components/program/edit/edit-input";
import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useFormState } from "react-dom";
import {
  editProgram,
  EditProgramType,
} from "@/app/program/(admin-only)/edit/[id]/action";
import EditPhoto from "@/components/program/edit/edit-photo";
import Link from "next/link";
import ProgramtButton from "../program-button";

export default function EditForm({
  program,
  id,
}: {
  program: EditProgramType;
  id: number;
}) {
  const [state, dispatch] = useFormState(editProgram, id);
  if (!program) return notFound();

  return (
    <form action={dispatch} className="h-screen mt-16">
      <EditPhoto name="photo" url={`${program.photo}/avatar`} />
      <div className="flex flex-col px-5 pb-[90px]">
        <div className="pb-5 px-1.5 flex items-center gap-3 border-b border-e-neutral-700">
          <div className="size-10 overflow-hidden rounded-full">
            {program.user.avatar ? (
              <Image
                width={40}
                height={40}
                src={`${program.user.avatar}/avatar`}
                alt={program.user.username}
              />
            ) : (
              <UserIcon />
            )}
          </div>
          <div>
            <h3>{program.user.username} (수정중)</h3>
          </div>
        </div>
        <div className="py-5 px-1.5 flex flex-col gap-3">
          <span className="*:text-2xl *:font-semibold">
            <EditInput name={"title"} value={program.title} />
          </span>
          <EditInput name={"description"} value={program.description} />
        </div>
      </div>
      <div
        className="fixed bottom-0 w-full bg-neutral-800 
      flex justify-between items-center sm:w-[640px] p-4 sm:p-5"
      >
        <span className="*:font-semibold *:text-lg *:sm:text-xl flex">
          <EditInput name={"price"} value={program.price.toString()} />
        </span>
        <div className="flex gap-2 sm:gap-3.5">
          <Link
            className={`bg-red-500 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-md 
          text-white font-semibold `}
            href={`/program/${program.id}`}
          >
            취소
          </Link>
          <ProgramtButton text="수정완료" color="orange-500" />
        </div>
      </div>
    </form>
  );
}
