"use client";

import { notFound } from "next/navigation";
import { useFormState } from "react-dom";
import {
  editProgram,
  EditProgramType,
} from "@/app/program/(admin-only)/edit/[id]/action";
import Input from "@/components/common/input";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { getUploadUrl } from "@/apis/common/actions";
import Button from "@/components/common/button";
import Textarea from "@/components/common/textarea";

export default function EditForm({
  program,
  id,
}: {
  program: EditProgramType;
  id: number;
}) {
  const [preview, setPreview] = useState(`${program?.photo}/avatar`);
  const [uploadUrl, setUploadUrl] = useState("");
  const [photoId, setPhotoId] = useState("");
  const [tmpFile, setTmpFile] = useState<File | null>(null);
  const [title, setTitle] = useState(program?.title);
  const [description, setDescription] = useState(program?.description);
  const [price, setPrice] = useState(program?.price);
  const [isOpen, setIsOpen] = useState(program?.isOpen);
  const [state, dispatch] = useFormState(interceptAction, null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(+e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleIsOpenChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const open = e.target.value === "공개" ? true : false;
    setIsOpen(open);
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      target: { files },
    } = event;
    if (!files) {
      return;
    }
    const file = files[0];
    setTmpFile(file);
    const url = URL.createObjectURL(file);
    setPreview(url);
    const { success, result } = await getUploadUrl();
    if (success) {
      const { id, uploadURL } = result;
      setUploadUrl(uploadURL);
      setPhotoId(id);
    }
  };

  async function interceptAction(_: any, formData: FormData) {
    const file = formData.get("photo");
    if (!file) {
      return;
    }
    let photo;
    if (tmpFile instanceof File) {
      const cloudflareForm = new FormData();
      cloudflareForm.append("file", tmpFile);
      const response = await fetch(uploadUrl, {
        method: "post",
        body: cloudflareForm,
      });
      if (response.status !== 200) {
        return;
      }
      photo = `https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/${photoId}`;
    } else {
      photo = program?.photo!;
    }

    formData.set("photo", photo);
    return editProgram(id, formData);
  }
  if (!program) return notFound();

  return (
    <div className="w-full flex flex-col items-center mb-[30px]">
      <div className="w-full sm:w-[640px] md:w-[768px] mt-5 px-5 flex items-center text-2xl sm:text-4xl font-bold mb-6">
        <span>프로그램 수정</span>
      </div>
      <form
        action={dispatch}
        className="flex flex-col gap-7 p-5 w-full sm:w-[640px] md:w-[768px]"
      >
        <div className="flex gap-5">
          <label
            htmlFor="photo"
            className="border-2 size-20 sm:size-24 aspect-square flex flex-col items-center justify-center 
            text-neutral-300 border-neutral-300 rounded-md border-dashed cursor-pointer p-2"
          >
            <PhotoIcon className="" />
          </label>
          {preview ? (
            <div
              className="bg-center bg-cover size-20 sm:size-24 rounded-md relative
              ring-[1px] ring-neutral-300"
              style={{
                backgroundImage: `url(${preview})`,
              }}
            >
              <div
                className="absolute bottom-0 text-white bg-black opacity-70 w-20 h-6 sm:w-24 sm:h-8 rounded-b-md
              text-xs sm:text-sm flex justify-center items-center"
              >
                대표사진
              </div>
            </div>
          ) : (
            ""
          )}
          <input
            onChange={handleImageChange}
            type="file"
            id="photo"
            name="photo"
            className="hidden"
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold">제목</div>
          <Input
            name="title"
            type="text"
            required
            placeholder="제목"
            value={title}
            onChange={handleTitleChange}
            errors={state?.fieldErrors.title}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold">가격</div>
          <Input
            name="price"
            type="number"
            required
            placeholder="₩ 가격을 입력해주세요"
            value={price}
            onChange={handlePriceChange}
            errors={state?.fieldErrors.price}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold">설명</div>
          <Textarea
            name="description"
            required
            placeholder="자세한 설명"
            value={description}
            onChange={handleDescriptionChange}
            errors={state?.fieldErrors.description}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold">공개여부</div>
          <select
            name="isopen"
            className="input-style w-full h-10 text-neutral-400"
            defaultValue={isOpen ? "공개" : "비공개"}
            onChange={handleIsOpenChange}
          >
            <option>공개</option>
            <option>비공개</option>
          </select>
        </div>
        <Button text="작성 완료" />
      </form>
    </div>
  );
}
