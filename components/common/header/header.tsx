import { getUser } from "@/apis/user/actions";
import HeaderContent from "./header-content";

export default async function Header() {
  const user = await getUser();

  return (
    <div
      className="w-full bg-white dark:bg-neutral-900 
      flex justify-center items-center fixed top-0 left-0 z-10"
    >
      <HeaderContent user={user} />
    </div>
  );
}
