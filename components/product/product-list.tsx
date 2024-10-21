"use client";

import ListProduct from "./list-product";
import { useEffect, useRef, useState } from "react";
// import { getMoreProducts, InitialProducts } from "@/app/program/actions";

// interface ProductsProps {
//   initialProducts: InitialProducts;
// }

interface ProductsProps {
  initialProducts: {
    id: number;
    title: string;
    price: number;
    description: string;
    photo: string;
    created_at: Date;
  }[];
}

export default function ProductList({ initialProducts }: ProductsProps) {
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);
  const [page, setPage] = useState(0);
  const trigger = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     async (
  //       entries: IntersectionObserverEntry[],
  //       observer: IntersectionObserver
  //     ) => {
  //       const element = entries[0];
  //       if (element.isIntersecting && trigger.current) {
  //         observer.unobserve(trigger.current);
  //         setIsLoading(true);
  //         const newProducts = await getMoreProducts(page + 1);

  //         if (newProducts.length) {
  //           setPage((prev) => prev + 1);
  //           setProducts((prev) => [...prev, ...newProducts]);
  //         } else {
  //           setIsLastPage(true);
  //         }
  //         setIsLoading(false);
  //       }
  //     },
  //     {
  //       threshold: 0.1,
  //       rootMargin: "0px 0px -78px 0px",
  //     }
  //   );
  //   if (trigger.current) {
  //     observer.observe(trigger.current);
  //   }
  //   //clean-up function
  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [page]);

  return (
    <>
      <div className="flex flex-col gap-14 w-full sm:w-[640px]">
        {products.map((product) => (
          <ListProduct key={product.id} {...product} />
        ))}
      </div>
      {isLastPage ? null : (
        <div ref={trigger} className="text-xs bg-transparent text-transparent">
          {isLoading ? "로딩중" : "더 가져오기"}
        </div>
      )}
    </>
  );
}
