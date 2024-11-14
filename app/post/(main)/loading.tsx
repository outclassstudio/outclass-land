export default function PostLoading() {
  return (
    <div className="mt-[80px] flex flex-col items-center">
      <div className="w-screen md:w-[768px] flex justify-start mb-6 px-5 mt-5">
        <div className="skeleton-style w-[120px] h-[40px] animate-pulse" />
      </div>
      <div className="w-screen md:w-[768px] nimate-pulse px-5">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className="pb-5 mb-5 border-b border-neutral-200 dark:border-neutral-700 text-neutral-400
          flex items-center gap-5 last:pb-0 last:border-b-0"
          >
            <div className="skeleton-style size-[110px] aspect-square" />
            <div className="flex flex-col gap-2 w-full justify-center">
              <div className="skeleton-style w-[150px] h-[28px]" />
              <div className="skeleton-style w-full h-11" />
              <div className="flex items-center justify-between text-sm">
                <div className="flex gap-4 items-center">
                  <span className="skeleton-style w-[37px] h-5" />
                  <span className="skeleton-style size-1" />
                  <span className="skeleton-style w-[37px] h-5" />
                </div>
                <div className="flex gap-4 items-center">
                  <span className="skeleton-style w-[29px] h-6" />
                  <span className="skeleton-style w-[29px] h-6" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
