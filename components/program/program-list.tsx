"use client";

import ProgramBox from "./program-box";
import { useEffect, useRef, useState } from "react";

// interface ProductsProps {
//   initialProducts: InitialProducts;
// }

interface ProgramsProps {
  initialPrograms: {
    id: number;
    title: string;
    price: number;
    description: string;
    photo: string | null;
    created_at: Date;
  }[];
}

export default function ProgramList({ initialPrograms }: ProgramsProps) {
  const [programs, setPrograms] = useState(initialPrograms);
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
  //         const newPrograms = await getMorePrograms(page + 1);

  //         if (newPrograms.length) {
  //           setPage((prev) => prev + 1);
  //           setPrograms((prev) => [...prev, ...newPrograms]);
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
        {programs.map((program) => (
          <ProgramBox key={program.id} {...program} />
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
