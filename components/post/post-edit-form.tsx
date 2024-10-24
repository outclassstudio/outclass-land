"use client";

import Input from "@/components/common/input";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Textarea from "@/components/common/textarea";
import { InitialPostType } from "@/app/post/edit/[id]/page";
import { notFound } from "next/navigation";
import { editPost } from "@/app/post/edit/[id]/actions";
import { useRouter } from "next/navigation";
import { getUploadUrl } from "@/app/(products)/add/actions";
import useThemeStore from "@/store/store";
import MDEditor from "@uiw/react-md-editor";

interface PostEditProps {
  initialPost: InitialPostType;
}

export default function PostEditForm({ initialPost }: PostEditProps) {
  const [title, setTitle] = useState(initialPost?.title);
  const [content, setContent] = useState(initialPost?.description);
  const [summary, setSummary] = useState<string>(initialPost?.summary!);
  const [preview, setPreview] = useState<string>(initialPost?.photo!);
  const [uploadUrl, setUploadUrl] = useState("");
  const [photoId, setPhotoId] = useState("");
  const [tmpFile, setTmpFile] = useState<File | null>(null);
  const [isTitleBlank, setIsTitleBlank] = useState(false);
  const [isContentBlank, setIsContentBlank] = useState(false);
  const [pending, setPendig] = useState(false);
  const router = useRouter();
  const { isDark } = useThemeStore();
  if (!initialPost) return notFound();

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setIsTitleBlank(true);
    } else {
      setIsTitleBlank(false);
    }
    setTitle(e.target.value);
  };

  const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value === "") {
      setIsContentBlank(true);
    } else {
      setIsContentBlank(false);
    }
    setContent(e.target.value);
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

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && content) {
      setPendig(true);

      const data = {
        id: initialPost.id,
        title,
        content,
        summary,
        preview,
      };

      const result = await editPost(data);
      if (result) {
        router.push(`/post/${initialPost.id}`);
      }
    }
  };

  return (
    <div className="mt-[100px] w-full flex justify-center">
      <form
        className="w-full sm:w-[768px] flex flex-col gap-5 p-5"
        onSubmit={onSubmit}
      >
        <input
          onChange={onImageChange}
          type="file"
          id="photo"
          name="photo"
          className="hidden"
        />
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <div className="font-bold dakr:text-neutral-200">제목</div>
            {isTitleBlank ? (
              <div className="text-red-500 text-sm">제목은 필수에요</div>
            ) : (
              ""
            )}
          </div>
          <Input
            type="text"
            name="title"
            value={title}
            required
            placeholder="제목"
            onChange={onTitleChange}
            // errors={state?.fieldErrors.title}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <div className="font-bold dark:text-neutral-200">내용</div>
            {isContentBlank ? (
              <div className="text-red-500 text-sm">내용은 필수에요</div>
            ) : (
              ""
            )}
          </div>
          <div className="container" data-color-mode={isDark ? "dark" : ""}>
            <MDEditor
              value={content!}
              onChange={(data) => setContent(data!)}
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
          text-neutral-300 border-neutral-300 rounded-md border-dashed cursor-pointer
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
                  backgroundImage: `url(${preview}/avatar)`,
                }}
              >
                <div
                  className="absolute bottom-0 bg-black opacity-70 w-16 h-6 sm:w-20 sm:h-8 rounded-b-md
              text-xs sm:text-sm flex justify-center items-center"
                >
                  대표사진
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          {/* <div className="text-neutral-400 text-sm">
          {state?.fieldErrors.photo}
        </div> */}
        </div>
        <button
          disabled={pending}
          className="primary-btn h-10 
    disabled:bg-neutral-400 disabled:text-neutral-300
    disabled:cursor-not-allowed"
        >
          {pending ? "로딩중..." : "수정 완료"}
        </button>
      </form>
    </div>
  );
}
