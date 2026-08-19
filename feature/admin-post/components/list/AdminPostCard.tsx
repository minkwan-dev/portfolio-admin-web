import { AdminPostRowActions } from "@/feature/admin-post/components/list/AdminPostRowActions"
import { AdminPostStatusDot } from "@/feature/admin-post/components/list/AdminPostStatusDot"
import type { AdminPostListItem } from "@/shared/model/admin-post.types"

type AdminPostCardProps = {
    post: AdminPostListItem
}

export function AdminPostCard({ post }: AdminPostCardProps) {
    const releasedDate = post.releasedAt?.slice(0, 10) ?? "—"

    return (
        <div className="flex items-start justify-between gap-3 border-b border-border-soft px-5 py-4 last:border-0">
            <div className="min-w-0 flex-1">
                <p className="line-clamp-2 text-[15px] font-medium leading-snug text-ink">
                    {post.title}
                </p>
                <div className="mt-2.5 flex flex-wrap items-center gap-2.5">
                    <AdminPostStatusDot post={post} />
                    <span className="text-[13px] tabular-nums text-muted">{releasedDate}</span>
                </div>
            </div>
            <AdminPostRowActions post={post} />
        </div>
    )
}
