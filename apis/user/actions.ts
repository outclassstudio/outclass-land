"use server";

import db from "@/lib/db";
import getSession from "@/lib/session";
import { Prisma } from "@prisma/client";

export const getUser = async () => {
  const session = await getSession();
  if (session.id) {
    const user = await db.user.findUnique({
      where: {
        id: session.id,
      },
      select: {
        id: true,
        email: true,
        username: true,
        avatar: true,
        role: true,
      },
    });
    return user;
  }
  return null;
};

export type UserType = Prisma.PromiseReturnType<typeof getUser>;

export const getUserRole = async () => {
  const session = await getSession();
  if (session.id) {
    const user = await db.user.findUnique({
      where: {
        id: session.id,
      },
      select: {
        role: true,
      },
    });
    return user;
  }
  return null;
};
