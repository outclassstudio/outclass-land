"use server";

import db from "@/lib/db";
import { StatusOptions } from "@/lib/types/apply";
import { Prisma } from "@prisma/client";

export async function getAppliedPrograms() {
  const products = await db.apply.findMany({
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
    orderBy: {
      id: "desc",
    },
  });
  return products;
}

export type UserPrograms = Prisma.PromiseReturnType<typeof getAppliedPrograms>;

export async function editApplyStatus(id: number, status: StatusOptions) {
  const result = await db.apply.update({
    where: {
      id,
    },
    data: {
      status,
    },
    select: {
      id: true,
    },
  });
  if (result) {
    return result;
  }
}
