"use client";

import Button from "@/components/common/button";
import Input from "@/components/common/input";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useFormState } from "react-dom";
import Textarea from "@/components/common/textarea";
import { getUploadUrl } from "@/apis/common/actions";
import { uploadProgram } from "./actions";

export default function AddProgram() {
  const [preview, setPreview] = useState("");
  const [uploadUrl, setUploadUrl] = useState("");
  const [photoId, setPhotoId] = useState("");
  const [state, dispatch] = useFormState(interceptAction, null);

  const onImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;
    if (!files) {
      return;
    }
    const file = files[0];
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
    const cloudflareForm = new FormData();
    cloudflareForm.append("file", file);
    const response = await fetch(uploadUrl, {
      method: "post",
      body: cloudflareForm,
    });
    if (response.status !== 200) {
      return;
    }

    const photoUrl = `https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/${photoId}`;
    formData.set("photo", photoUrl);
    return uploadProgram(formData);
  }

  return (
    <div className="w-full flex flex-col items-center mb-[30px]">
      <div className="w-full sm:w-[640px] md:w-[768px] mt-5 px-5 flex items-center text-2xl sm:text-4xl font-bold mb-6">
        <span>새프로그램 등록</span>
      </div>
      <form
        action={dispatch}
        className="flex flex-col gap-7 px-5 w-full sm:w-[640px] md:w-[768px]"
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
            onChange={onImageChange}
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
            errors={state?.fieldErrors.price}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold">설명</div>
          <Textarea
            name="description"
            required
            placeholder="자세한 설명"
            errors={state?.fieldErrors.description}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold">공개여부</div>
          <select
            name="isopen"
            className="input-style w-full h-10 text-neutral-400"
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
