import ProductList from "@/components/product/product-list";
import { PlusIcon } from "@heroicons/react/24/solid";
import { unstable_cache as nextCache, revalidateTag } from "next/cache";
import Link from "next/link";
import { getInitialProducts } from "./actions";
import { dummyData } from "@/lib/dummy";

//cache 사용 -> 함수는 return이 반드시 있어야 함
const getCashedProducts = nextCache(getInitialProducts, ["home-products"], {
  tags: ["products"],
  revalidate: 60,
});

export const metadata = {
  title: "홈",
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
    <div className="mt-[80px] flex justify-center">
      <ProductList initialProducts={initialProducts} />
      {/* <Link
        href="/add"
        className="bg-orange-500 flex items-center justify-center 
        rounded-full size-16 fixed bottom-24 right-8 text-white
        transition-colors hover:bg-orange-400 shadow-lg shadow-neutral-800"
      >
        <PlusIcon className="size-10" />
      </Link> */}
    </div>
  );
}
