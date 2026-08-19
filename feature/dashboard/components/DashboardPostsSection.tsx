import { AdminPostList } from "@/feature/admin-post/components/list/AdminPostList"

export function DashboardPostsSection() {
    return (
        <section className="space-y-4">
            <div className="flex items-end justify-between gap-4">
                <div>
                    <h2 className="text-lg font-semibold tracking-tight">글 목록</h2>
                    <p className="mt-1 text-sm text-zinc-500">
                        작성한 글을 확인하고 편집할 수 있어요.
                    </p>
                </div>
            </div>

            <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-zinc-950/5">
                <AdminPostList />
            </div>
        </section>
    )
}
