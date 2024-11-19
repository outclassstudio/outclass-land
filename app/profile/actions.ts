"use server";

import db from "@/lib/db";
import { Prisma } from "@prisma/client";
import UserPrograms from "./likes/page";

export async function getUserPrograms(userId: number) {
  const products = await db.apply.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
      name: true,
      phone: true,
      sex: true,
      option: true,
      date: true,
      dateTime: true,
      subject: true,
      created_at: true,
      status: true,
      program: {
        select: {
          title: true,
        },
      },
    },
  });
  return products;
}

export type UserPrograms = Prisma.PromiseReturnType<typeof getUserPrograms>;

export async function getUserLikePrograms(userId: number) {
  const products = await db.program.findMany({
    where: {
      programLikes: {
        some: {
          userId,
        },
      },
    },
    select: {
      id: true,
      title: true,
      price: true,
      created_at: true,
      photo: true,
      description: true,
      isOpen: true,
      _count: {
        select: {
          programLikes: true,
          chatrooms: true,
        },
      },
    },
    take: 1,
    orderBy: {
      created_at: "desc",
    },
  });
  return products;
}

export type UserLikePrograms = Prisma.PromiseReturnType<
  typeof getUserLikePrograms
>;
