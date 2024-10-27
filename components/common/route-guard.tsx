import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { UserRole } from "@/lib/types";
import { getUser } from "@/apis/user/actions";

interface RouteGuardProps {
  children: ReactNode;
  allowedRoles: UserRole[];
}

export default async function RouteGuard({
  children,
  allowedRoles,
}: RouteGuardProps) {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  const userRole = user.role as UserRole;

  if (!allowedRoles.includes(userRole)) {
    redirect("/unauthorized");
  }

  return <>{children}</>;
}
