import ProgramList from "@/components/program/program-list";
import getSession from "@/lib/session";
import { notFound } from "next/navigation";
import { getUserPrograms } from "../actions";

export const metadata = {
  title: "상담내역",
};

export default async function UserProducts() {
  const session = await getSession();
  const id = session.id;
  if (!session.id) return notFound();
  const userPrograms = await getUserPrograms(id!);

  return (
    <div>
      {userPrograms ? <div>준비중</div> : <div>참여한 프로그램이 없어요</div>}
    </div>
  );
}
