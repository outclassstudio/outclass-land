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
  const userProducts = await getUserPrograms(id!);

  return (
    <div>
      {userProducts ? (
        <ProgramList initialPrograms={userProducts} />
      ) : (
        <div>판매중인 물품이 없어요</div>
      )}
    </div>
  );
}
