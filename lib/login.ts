"use server";

import { redirect } from "next/navigation";
import getSession from "./session";

export async function Login(id: number) {
  const session = await getSession();
  session.id = id;
  await session.save();
}

export async function logOut() {
  const session = await getSession();
  session.destroy();
  redirect("/");
}
