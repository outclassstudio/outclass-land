"use client";

import { saveProfile } from "@/app/profile/edit/actions";
import { GetUserData } from "@/app/profile/edit/page";
import { CameraIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { USER_ICON_ID, USER_ICON_URL } from "@/lib/constants";
import Link from "next/link";
import { getUploadUrl } from "@/apis/common/actions";
import Button from "../common/button";

interface ProfileEditInputProps {
  user: GetUserData;
}

export default function ProfileEditInput({ user }: ProfileEditInputProps) {
  const [username, setUsername] = useState(user?.username);
  const [preview, setPreview] = useState(`${user?.avatar}/avatar`);
  const [avatarURL, setAvatarURL] = useState("");
  const [avatarID, setAvatarID] = useState(`${user?.avatar?.split("/")[4]}`);
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username) {
      if (avatarID !== USER_ICON_ID) {
        const cloudflareForm = new FormData();
        cloudflareForm.append("file", file!);
        const response = await fetch(avatarURL, {
          method: "post",
          body: cloudflareForm,
        });
        if (response.status !== 200) {
          return;
        }
      }

      const photoUrl = `https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/${avatarID}`;
      const result = await saveProfile(username, photoUrl);
      if (result) {
        setErrors(result.formErrors);
      }
    } else {
      setErrors(["빈칸이에요"]);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

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
    setFile(file);
    const { success, result } = await getUploadUrl();
    if (success) {
      const { id, uploadURL } = result;
      setAvatarURL(uploadURL);
      setAvatarID(id);
    }
  };

  const changeToUserIcon = () => {
    if (preview === USER_ICON_URL) return;
    setAvatarID(USER_ICON_ID);
    setPreview(`${USER_ICON_URL}/width=150,height=150`);
  };

  return (
    <div className="flex justify-center mt-[100px] h-[calc(100vh-240px)]">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-5 items-center w-full sm:w-[640px] px-4"
      >
        <div className="w-full">
          <span className="text-xl font-bold">프로필 수정</span>
        </div>
        <div></div>
        <div className="flex flex-col items-center mb-10">
          <label htmlFor="avatar" className="relative cursor-pointer">
            {preview ? (
              <div
                className="w-24 h-24 rounded-full m-2 overflow-hidden bg-center bg-cover"
                style={{ backgroundImage: `url(${preview})` }}
              />
            ) : (
              <UserCircleIcon className="size-28 text-neutral-300" />
            )}
            <CameraIcon
              className="bg-white p-[2px] size-6 absolute right-4 bottom-5 
            text-neutral-800 rounded-full border-[1px] border-neutral-400"
            />
            <input
              id="avatar"
              type="file"
              onChange={onImageChange}
              className="hidden"
            />
          </label>
          <div
            className="cursor-pointer text-neutral-700 dark:text-neutral-300
        text-sm hover:text-neutral-100"
            onClick={changeToUserIcon}
          >
            이미지 삭제
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="font-semibold">닉네임</div>
          <input
            onChange={onChange}
            type="text"
            value={username}
            className="w-full bg-transparent rounded-md ring-2 ring-neutral-500
            border-none outline-none focus:ring-2 focus:ring-neutral-400"
          />
          {errors.map((error, index) => (
            <span key={index} className="text-red-500 font-medium">
              {error}
            </span>
          ))}
        </div>
        <Button text="수정완료" />
        <Link
          href="/profile/signout"
          className="text-red-600 w-full hover:text-red-400
        rounded-lg flex justify-center items-center text-lg font-semibold"
        >
          계정삭제
        </Link>
      </form>
    </div>
  );
}
