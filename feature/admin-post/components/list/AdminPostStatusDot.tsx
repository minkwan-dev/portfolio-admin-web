import type { AdminPostListItem } from "@/shared/model/admin-post.types"

type PostStatus = {
    label: "임시" | "발행" | "메인"
    className: string
}

function resolvePostStatus(post: AdminPostListItem): PostStatus {
    if (post.isTemp) {
        return {
            label: "임시",
            className: "bg-amber-50 text-amber-700 ring-1 ring-amber-100",
        }
    }

    if (post.isMain) {
        return {
            label: "메인",
            className: "bg-violet-50 text-violet-700 ring-1 ring-violet-100",
        }
    }

    return {
        label: "발행",
        className: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
    }
}

type AdminPostStatusDotProps = {
    post: AdminPostListItem
}

export function AdminPostStatusDot({ post }: AdminPostStatusDotProps) {
    const status = resolvePostStatus(post)

    return (
        <span
            className={`inline-flex items-center rounded-md px-2 py-0.5 text-[12px] font-medium leading-none ${status.className}`}
        >
            {status.label}
        </span>
    )
}
