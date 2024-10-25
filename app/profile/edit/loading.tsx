export default function ProfileEditLoading() {
  return (
    <div className="flex justify-center mt-[100px] h-[calc(100vh-140px)] animate-pulse">
      <div className="flex flex-col gap-5 items-center w-full sm:w-[640px] px-4">
        <div className="w-full mb-4">
          <div className="skeleton-style w-[92px] h-[28px]" />
        </div>
        <div className="flex flex-col items-center mb-10">
          <div className="skeleton-style w-24 h-24 rounded-full m-4 overflow-hidden mb-2" />
          <div className="skeleton-style w-16 h-5" />
        </div>
        <div className="w-full flex flex-col gap-2 *:skeleton-style">
          <div className="w-12 h-5" />
          <div className="w-full h-10" />
        </div>
        <div className="skeleton-style w-full h-8" />
        <div className="skeleton-style w-16 h-7" />
      </div>
    </div>
  );
}
