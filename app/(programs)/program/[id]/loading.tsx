import LoadingSpinner from "@/components/common/loading/spinner";

export default function ProgramLoading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <LoadingSpinner />
    </div>
  );
}
