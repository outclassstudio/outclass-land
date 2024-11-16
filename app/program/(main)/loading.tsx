export default function Looading() {
  return (
    <div className="mt-[80px] flex flex-col items-center">
      <div className="w-screen md:w-[768px] flex justify-start mb-6 px-5 mt-5">
        <div className="skeleton-style w-[135px] h-[40px] animate-pulse" />
      </div>
      <div className="w-screen md:w-[768px] animate-pulse flex flex-col sm:grid sm:grid-cols-2 gap-14 sm:gap-4 px-5">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 rounded-lg border-2 dark:border-neutral-700"
          >
            <div className="relative aspect-video bg-neutral-300 dark:bg-neutral-700 rounded-t-md overflow-hidden" />
            <div className="flex flex-col px-5 gap-2 w-full">
              <div className="skeleton-style w-[200px] h-[32px]" />
              <div className="skeleton-style w-[300px] h-[24px] mb-10" />
              <div className="flex gap-2 border-b border-neutral-300 dark:border-neutral-700 pb-7 *:text-white">
                <span className="skeleton-style w-[65px] h-[28px]" />
                <span className="skeleton-style w-[65px] h-[28px]" />
              </div>
            </div>
            <div className="">
              <div className="flex items-end gap-3 px-5">
                <span className="skeleton-style w-[122px] h-[28px]" />
              </div>
              <div className="w-full flex justify-end items-center gap-3 *:flex *:gap-1 *:items-center p-5">
                <div>
                  <span className="skeleton-style w-[16px] h-[20px]" />
                  <span className="skeleton-style w-[27px] h-[20px]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
