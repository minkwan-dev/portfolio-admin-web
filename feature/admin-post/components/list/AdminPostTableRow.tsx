import { AdminPostRowActions } from "@/feature/admin-post/components/list/AdminPostRowActions"
import { AdminPostStatusDot } from "@/feature/admin-post/components/list/AdminPostStatusDot"
import type { AdminPostListItem } from "@/shared/model/admin-post.types"

type AdminPostTableRowProps = {
    post: AdminPostListItem
}

export function AdminPostTableRow({ post }: AdminPostTableRowProps) {
    const releasedDate = post.releasedAt?.slice(0, 10) ?? "—"

    return (
        <tr className="border-b border-border-soft transition-colors last:border-0 hover:bg-[#fafbfc]">
            <td className="px-5 py-4 text-[14px] font-medium text-ink">{post.title}</td>
            <td className="px-5 py-4">
                <AdminPostStatusDot post={post} />
            </td>
            <td className="px-5 py-4 text-[13px] tabular-nums text-muted">{releasedDate}</td>
            <td className="px-5 py-4">
                <AdminPostRowActions post={post} />
            </td>
        </tr>
    )
}
