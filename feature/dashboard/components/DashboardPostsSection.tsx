import { AdminPostList } from "@/feature/admin-post/components/list/AdminPostList"

export function DashboardPostsSection() {
    return (
        <section className="flex flex-col gap-4">
            <div className="px-1">
                <h2 className="text-[17px] font-semibold tracking-tight text-ink">글 목록</h2>
                <p className="mt-1 text-[14px] text-muted">
                    작성한 글을 확인하고 편집할 수 있어요.
                </p>
            </div>

            <div className="overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-card)] ring-1 ring-border/60">
                <AdminPostList />
            </div>
        </section>
    )
}
