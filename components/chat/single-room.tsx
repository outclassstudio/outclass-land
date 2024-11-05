import db from "@/lib/db";
import getSession from "@/lib/session";
import { formatToTimeAgo } from "@/lib/utils";
import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

interface SingleRoomProps {
  id: string;
  users: {
    id: number;
    username: string;
    avatar: string | null;
  }[];
  messages: {
    created_at: Date;
    payload: string;
    chatRoomId: string;
    userId: number;
  }[];
  program: {
    id: number;
  };
}

async function getProgramInfo(id: number) {
  const program = await db.program.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
    },
  });
  return program;
}

export default async function SingleRoom({
  id,
  users,
  messages,
  program,
}: SingleRoomProps) {
  const session = await getSession();
  const [avatarUser] = users.filter((user) => user.id !== session.id);
  const [lastMessage] = messages.slice(-1);
  const programInfo = await getProgramInfo(program.id);

  return (
    <Link
      href={`/chats/${id}`}
      className="text-white flex items-center gap-5 py-3 h-20 px-1 w-full
    border-b border-neutral-500 last:pb-0 last:border-b-0"
    >
      {avatarUser.avatar ? (
        <Image
          src={`${avatarUser.avatar!}/avatar`}
          alt=""
          width={40}
          height={40}
          className="rounded-full size-10 overflow-hidden"
        />
      ) : (
        <UserIcon className="size-10" />
      )}
      <div className="flex flex-col gap-1 text-lg">
        <div className="flex gap-3 items-end">
          {users.map((user, idx) => (
            <span key={idx}>
              {user.username}
              {idx === users.length - 1 ? "" : ","}
            </span>
          ))}
          {programInfo ? (
            <div className="text-sm text-neutral-400">
              @ {programInfo.title}
            </div>
          ) : null}
          <div className="text-xs text-neutral-500">
            {lastMessage
              ? formatToTimeAgo(lastMessage.created_at.toString())
              : ""}
          </div>
        </div>
        <div className="text-sm text-neutral-400">
          {lastMessage ? lastMessage.payload : "아직 채팅이 없어요"}
        </div>
      </div>
    </Link>
  );
}
