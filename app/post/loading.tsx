export default function PostLoading() {
  return (
    <div className="mt-[80px] p-5 flex min-h-[600px] justify-center">
      <div className="w-full sm:w-[640px] px-2 animate-pulse">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className="pb-5 mb-5 border-b border-neutral-200 dark:border-neutral-700 text-neutral-400
          flex items-center gap-5 last:pb-0 last:border-b-0"
          >
            <div className="skeleton-style size-[96px] aspect-square" />
            <div className="flex flex-col gap-2 w-full justify-center">
              <div className="skeleton-style w-[150px] h-[28px]" />
              <div className="skeleton-style w-[200px] h-[24px]" />
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
