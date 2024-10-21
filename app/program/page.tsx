import ProductList from "@/components/product/product-list";
import { dummyData } from "@/lib/dummy";
// import { unstable_cache as nextCache, revalidateTag } from "next/cache";
// import { getInitialProducts } from "./actions";

//cache 사용 -> 함수는 return이 반드시 있어야 함
// const getCashedProducts = nextCache(getInitialProducts, ["home-products"], {
//   tags: ["products"],
//   revalidate: 60,
// });

export const metadata = {
  title: "프로그램",
};

export const dynamic = "force-dynamic";

export default async function Products() {
  //todo 캐싱전략 수정 필요
  // const initialProducts = await getCashedProducts();
  // const initialProducts = await getInitialProducts();
  const initialProducts = dummyData;

  // const getData = () => {
  //   return new Promise((res) => setTimeout(res, 5000)).then(() => {
  //     return dummyData;
  //   });
  // };
  // const initialProducts = await getData();

  return (
    <div className="mt-[100px] flex flex-col items-center p-5">
      <div className="w-full flex text-2xl sm:text-4xl font-bold mb-4">
        프로그램
      </div>
      <ProductList initialProducts={initialProducts} />
    </div>
  );
}
