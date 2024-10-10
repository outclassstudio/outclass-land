import { UserIcon } from "@heroicons/react/24/solid";

interface RecommendDataProp {
  data: {
    id: number;
    name: string;
    age: string;
    comment: string;
  };
}

export default function RecommendBox({ data }: RecommendDataProp) {
  return (
    <div className="flex p-4 gap-5 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-lg">
      <div className="flex flex-col items-center gap-1 flex-none">
        <UserIcon className="size-10" />
        <div>{data.name}</div>
        <div className="text-xs font-light">{data.age}</div>
      </div>
      <div>{data.comment}</div>
    </div>
  );
}
