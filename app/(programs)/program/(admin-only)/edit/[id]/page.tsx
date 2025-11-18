// import db from "@/lib/db";
import { unstable_cache as nextCache } from "next/cache";
import { notFound } from "next/navigation";
import EditForm from "@/components/program/edit/edit-form";
import { getProgram } from "./action";

//todo 캐싱전략
// const getCashedProduct = nextCache(getProduct, ["product-detail"], {
//   tags: ["product-detail"],
// });

export async function generateMetadata({ params }: { params: { id: string } }) {
  const program = await getProgram(+params.id);
  return {
    title: program?.title,
  };
}

export default async function EditProgramDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (isNaN(id)) return notFound();

  const program = await getProgram(id);
  // const product = await getCashedProduct(id);
  if (!program) return notFound();

  return <EditForm program={program} id={id} />;
}

// export async function generateStaticParams() {
//   const products = await db.product.findMany({
//     select: {
//       id: true,
//     },
//   });

//   return products.map((product) => ({
//     id: product.id.toString(),
//   }));
// }
