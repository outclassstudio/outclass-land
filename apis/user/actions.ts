"use server";

import db from "@/lib/db";
import getSession from "@/lib/session";

export const getUser = async () => {
  const session = await getSession();
  if (session.id) {
    const user = await db.user.findUnique({
      where: {
        id: session.id,
      },
      select: {
        id: true,
        username: true,
        avatar: true,
        role: true,
      },
    });
    return user;
  }
  return null;
};
