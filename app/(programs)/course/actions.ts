"use server";

import db from "@/lib/db";
import { Prisma } from "@prisma/client";

export async function getMorePrograms(page: number) {
  const programs = await db.program.findMany({
    select: {
      id: true,
      title: true,
      price: true,
      created_at: true,
      photo: true,
      _count: {
        select: {
          programLikes: true,
          chatrooms: true,
        },
      },
    },
    skip: 6 * page,
    take: 6,
    // orderBy: {
    //   created_at: "desc",
    // },
  });
  return programs;
}

export async function getInitialPrograms() {
  const programs = await db.program.findMany({
    select: {
      id: true,
      title: true,
      price: true,
      created_at: true,
      description: true,
      photo: true,
      isOpen: true,
      _count: {
        select: {
          programLikes: true,
          chatrooms: true,
        },
      },
    },
    take: 6,
    // orderBy: {
    //   created_at: "desc",
    // },
  });
  return programs;
}

export type InitialPrograms = Prisma.PromiseReturnType<
  typeof getInitialPrograms
>;

export async function getProgram(id: number) {
  const program = await db.program.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      price: true,
      created_at: true,
      description: true,
      photo: true,
      isOpen: true,
      _count: {
        select: {
          programLikes: true,
          chatrooms: true,
        },
      },
    },
  });
  return program;
}
