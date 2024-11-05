import ProductList from "@/components/product/product-list";
import db from "@/lib/db";
import getSession from "@/lib/session";
import { Prisma } from "@prisma/client";
import { notFound } from "next/navigation";

async function getInitialProducts(userId: number) {
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

export type InitialProducts = Prisma.PromiseReturnType<
  typeof getInitialProducts
>;

export default async function UserProducts() {
  const session = await getSession();
  const id = session.id;
  if (!session.id) return notFound();
  const initialProducts = await getInitialProducts(id!);

  return (
    <div>
      {initialProducts ? (
        <ProductList initialProducts={initialProducts} />
      ) : (
        <div>판매중인 물품이 없어요</div>
      )}
    </div>
  );
}
