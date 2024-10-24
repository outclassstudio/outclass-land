import { dateFormatter, formatToTimeAgo } from "@/lib/utils";
import Link from "next/link";
import { EyeIcon, HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface PostProps {
  post: {
    id: number;
    title: string;
    description: string | null;
    photo: string | null;
    summary: string;
    created_at: Date;
    _count: {
      likes: number;
      comments: number;
    };
    views: number;
  };
}

export default function SinglePostBox({ post }: PostProps) {
  return (
    <Link
      key={post.id}
      href={`/post/${post.id}`}
      className="pb-5 mb-5 border-b border-neutral-200 dark:border-neutral-700 text-neutral-400
      flex gap-5 last:pb-0 last:border-b-0 items-center"
    >
      {post.photo ? (
        <div className="aspect-square w-[140px] relative rounded-md overflow-hidden">
          <Image
            src={`${post.photo}/width=120,height=120`}
            className="object-cover"
            fill
            alt=""
          />
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col gap-[6px] sm:gap-2 w-full justify-center">
        <h2 className="text-neutral-900 dark:text-white text-lg sm:text-xl font-semibold">
          {post.title}
        </h2>
        <p className="h-10 sm:h-12 line-clamp-2	text-ellipsis text-sm sm:text-base text-neutral-800 dark:text-neutral-200">
          {post.summary}
        </p>
        <div className="flex items-center justify-between text-sm">
          <div className="flex gap-3 items-baseline">
            <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-300">
              {dateFormatter(post.created_at)}
            </span>
            <span className="hidden sm:block text-xs">
              {formatToTimeAgo(post.created_at.toString())}
            </span>
          </div>
          <div
            className="flex gap-1 sm:gap-4 items-center 
            *:flex *:items-center *:gap-1 *:text-xs sm:*:text-sm"
          >
            <span>
              <HeartIcon className="size-4" />
              {post._count.likes}
            </span>
            <span>
              <EyeIcon className="size-4" /> {post.views}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
