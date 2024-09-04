"use client";

import { InitialComments, saveComment } from "@/app/posts/[id]/actions";
import { useRef, useState } from "react";
import CommentInput from "./comment-input";
import SingleComment from "./single-comment";

interface CommentInputProps {
  initialComments: InitialComments;
  userId: number;
  postId: number;
  username: string;
  avatar: string;
  postUserId: number;
}

export default function CommentsList({
  initialComments,
  userId,
  postId,
  username,
  avatar,
  postUserId,
}: CommentInputProps) {
  const [comments, setComments] = useState(initialComments);
  const [comment, setComment] = useState("");
  const textarea = useRef<HTMLTextAreaElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
    const compare = Number(textarea!.current!.style.height.replace("px", ""));

    if (!textarea!.current!.value) {
      textarea!.current!.style.height = "40px";
    }

    if (compare < 70) {
      textarea!.current!.style.height = "auto";
      textarea!.current!.style.height = textarea!.current!.scrollHeight + "px";
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newId = comments[comments.length - 1].id + 1;
    setComments((prevMsg) => [
      ...prevMsg,
      {
        id: newId,
        payload: comment,
        created_at: new Date(),
        userId,
        postId,
        user: {
          username,
          avatar,
        },
      },
    ]);
    await saveComment(comment, userId, postId);
    setComment("");
  };

  return (
    <div className="flex flex-col gap-5 mb-[90px]">
      {comments.map((comment) => (
        <SingleComment
          key={comment.id}
          comment={comment}
          userId={userId}
          postUserId={postUserId}
        />
      ))}
      <CommentInput
        comment={comment}
        onChange={onChange}
        onSubmit={onSubmit}
        textarea={textarea}
      />
    </div>
  );
}