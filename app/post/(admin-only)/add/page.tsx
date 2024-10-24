"use client";

import Button from "@/components/common/button";
import Input from "@/components/common/input";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { uploadPost } from "./action";
import MDEditor from "@uiw/react-md-editor";
import "@/components/post/post-viewer.css";
import Textarea from "@/components/common/textarea";
import useThemeStore from "@/store/store";
import { getUploadUrl } from "@/apis/common/actions";

export default function AddPost() {
  const [preview, setPreview] = useState("");
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [summary, setSummary] = useState("");
  const [uploadUrl, setUploadUrl] = useState("");
  const [photoId, setPhotoId] = useState("");
  const [tmpFile, setTmpFile] = useState<File | null>(null);
  const { isDark } = useThemeStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      photo = "/undefined";
    }

    const data = {
      title,
      post,
      photo,
      summary,
    };

    await uploadPost(data);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSummayChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSummary(e.target.value);
  };

  const onImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <div className="w-full flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-[768px] flex flex-col gap-5 p-5"
      >
        <div className="flex flex-col gap-3">
          <div className="font-bold dakr:text-neutral-200">제목</div>
          <Input
            name="title"
            type="text"
            value={title}
            required
            placeholder="제목"
            onChange={handleTitleChange}
            // errors={state?.fieldErrors.title}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold dark:text-neutral-200">내용</div>
          <div className="container" data-color-mode={isDark ? "dark" : ""}>
            <MDEditor
              value={post}
              onChange={(data) => setPost(data!)}
              height="500px"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold dark:text-neutral-200">요약</div>
          <Textarea
            name="summary"
            value={summary}
            required
            placeholder="미리보기에 표시될 내용을 기록해주세요"
            onChange={handleSummayChange}
            maxLength={150}
            // errors={state?.fieldErrors.title}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold dark:text-neutral-200">썸네일</div>
          <div className="flex gap-5">
            <label
              htmlFor="photo"
              className="border-2 size-16 sm:size-20 aspect-square flex flex-col items-center justify-center 
          text-neutral-500 dark:text-neutral-300 border-neutral-300 rounded-md border-dashed cursor-pointer
          p-2"
            >
              <PhotoIcon />
              <input
                onChange={onImageChange}
                type="file"
                id="photo"
                name="photo"
                className="hidden"
              />
            </label>
            {preview ? (
              <div
                className="bg-center bg-cover size-16 sm:size-20 rounded-md relative
              ring-[1px] ring-neutral-300"
                style={{
                  backgroundImage: `url(${preview})`,
                }}
              ></div>
            ) : (
              ""
            )}
          </div>
          {/* <div className="text-neutral-400 text-sm">
          {state?.fieldErrors.photo}
        </div> */}
        </div>
        <Button text="작성 완료" />
      </form>
    </div>
  );
}
