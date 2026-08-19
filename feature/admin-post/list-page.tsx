import { AdminPostList } from "@/feature/admin-post/components/list/AdminPostList"
import { AdminPageShell } from "@/shared/components/AdminPageShell"

export default function AdminPostListPage() {
    return (
        <AdminPageShell>
            <main className="mx-auto flex w-full max-w-5xl flex-col gap-5 px-4 py-6 sm:gap-6 sm:px-6 sm:py-8 md:py-10">
                <h1 className="text-xl font-bold sm:text-2xl">글 관리</h1>
                <AdminPostList />
            </main>
        </AdminPageShell>
    )
}
