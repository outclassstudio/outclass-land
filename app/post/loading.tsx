export default function PostLoading() {
  return (
    <div className="mt-[80px] p-5 flex min-h-[600px] justify-center">
      <div className="w-full sm:w-[640px] px-2">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className="pb-5 mb-5 border-b border-neutral-200 dark:border-neutral-700 text-neutral-400
          flex items-center gap-5 last:pb-0 last:border-b-0"
          >
            <div className="size-[96px] aspect-square bg-neutral-300" />
            <div className="flex flex-col gap-2 w-full justify-center">
              <div className="bg-neutral-300 w-[150px] h-[28px] dark:bg-white text-xl font-semibold" />
              <div className="bg-neutral-300 w-[200px] h-[24px] dark:bg-neutral-200" />
              <div className="flex items-center justify-between text-sm">
                <div className="flex gap-4 items-center">
                  <span className="w-[37px] h-5 bg-neutral-300" />
                  <span className="bg-neutral-300 size-1" />
                  <span className="w-[37px] h-5 bg-neutral-300" />
                </div>
                <div className="flex gap-4 items-center">
                  <span className="w-[29px] h-6 bg-neutral-300" />
                  <span className="w-[29px] h-6 bg-neutral-300" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
