"use server";

import db from "@/lib/db";
import { Prisma } from "@prisma/client";

export async function getAppliedPrograms() {
  const products = await db.apply.findMany({
    select: {
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

export type UserPrograms = Prisma.PromiseReturnType<typeof getAppliedPrograms>;
