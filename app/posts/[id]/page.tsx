import db from "@/lib/db";
import getSession from "@/lib/session";
import { formatToTimeAgo } from "@/lib/utils";
import {
  EyeIcon,
  HandThumbUpIcon as HandThumbUpSolid,
} from "@heroicons/react/24/solid";
import { HandThumbUpIcon as HandThumbUpOutline } from "@heroicons/react/24/outline";
import { unstable_cache as nextCache, revalidateTag } from "next/cache";
import Image from "next/image";
import { notFound } from "next/navigation";
import LikeButton from "@/components/like-button";

async function getPost(id: number) {
  try {
    const post = await db.post.update({
      where: {
        id,
      },
      data: {
        views: {
          increment: 1,
        },
      },
      include: {
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
    });
    return post;
  } catch (e) {
    return null;
  }
}

const getCachedPost = nextCache(getPost, ["post-detail"], {
  tags: ["post-detail"],
  revalidate: 60,
});

async function getLikeStatus(postId: number, userId: number) {
  // const session = await getSession();
  const isLiked = await db.like.findUnique({
    where: {
      id: {
        postId,
        userId,
      },
    },
  });
  const likeCount = await db.like.count({
    where: {
      postId,
    },
  });
  return {
    likeCount,
    isLiked: Boolean(isLiked),
  };
}

function getCachedLikeStatus(postId: number, userId: number) {
  const getCached = nextCache(getLikeStatus, ["post-like-status"], {
    tags: [`like-status-${postId}`],
  });
  return getCached(postId, userId);
}

export default async function PostDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (isNaN(id)) return notFound();

  const post = await getCachedPost(id);
  if (!post) return notFound;

  //todo 세션 반복 호출에 대한 고민과 대책
  const session = await getSession();

  const { likeCount, isLiked } = await getCachedLikeStatus(id, session.id!);

  return (
    <div className="p-5 text-white">
      <div className="flex items-center gap-2 mb-2">
        <Image
          width={28}
          height={28}
          src={post.user.avatar!}
          alt={post.user.username}
          className="size-7 rounded-full"
        />
        <div>
          <span className="text-sm font-semibold">{post.user.username}</span>
          <div className="text-xs">
            <span>{formatToTimeAgo(post.created_at.toString())}</span>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-1">{post.title}</h2>
      <p className="mb-5">{post.description}</p>
      <div className="flex flex-col gap-5 items-start">
        <div className="flex items-center gap-2 text-neutral-400 text-sm">
          <EyeIcon className="size-5" />
          <span>조회 {post.views}</span>
        </div>
        <LikeButton isLiked={isLiked} likeCount={likeCount} postId={id} />
      </div>
    </div>
  );
}
