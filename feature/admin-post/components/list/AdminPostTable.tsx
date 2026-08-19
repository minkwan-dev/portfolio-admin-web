import { AdminPostTableRow } from "@/feature/admin-post/components/list/AdminPostTableRow"
import type { AdminPostListItem } from "@/shared/model/admin-post.types"

type AdminPostTableProps = {
    posts: AdminPostListItem[]
}

export function AdminPostTable({ posts }: AdminPostTableProps) {
    return (
        <div className="hidden md:block">
            <table className="min-w-full">
                <thead>
                    <tr className="border-b border-border-soft bg-[#fafbfc] text-left text-[12px] font-medium uppercase tracking-wide text-muted">
                        <th className="px-5 py-3.5">제목</th>
                        <th className="px-5 py-3.5">상태</th>
                        <th className="px-5 py-3.5">발행일</th>
                        <th className="w-28 px-5 py-3.5">
                            <span className="sr-only">관리</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <AdminPostTableRow key={post.id} post={post} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
