import ChatMessagesList from "@/components/chat/chat-messages-list";
import getSession from "@/lib/session";
import { notFound } from "next/navigation";
import { getMessages, getRoom } from "./actions";
import SimpleHeader from "@/components/common/simple-header";
import { getUser } from "@/apis/user/actions";

export default async function ChatRoom({ params }: { params: { id: string } }) {
  const room = await getRoom(params.id);
  if (!room) return notFound();

  const initialMessages = await getMessages(params.id);
  const session = await getSession();
  const user = await getUser();
  if (!user) return notFound();

  return (
    <>
      <SimpleHeader url={"chat"} text="채팅" />
      <ChatMessagesList
        chatRoomId={params.id}
        initialMessages={initialMessages}
        username={user.username}
        avatar={`${user.avatar!}`}
        userId={session.id!}
      />
    </>
  );
}
