import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

export default function NoContents({ text }: { text: string }) {
  return (
    <div className="w-full h-full flex gap-2 justify-center items-center">
      <ExclamationTriangleIcon className="size-10 text-amber-500" />
      <span className="text-2xl sm:text-3xl font-bold">{text}</span>
    </div>
  );
}
