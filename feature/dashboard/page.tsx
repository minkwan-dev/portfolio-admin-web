import { Dashboard } from "@/feature/dashboard/components/Dashboard"
import { AdminPageShell } from "@/shared/components/AdminPageShell"

export default function DashboardPage() {
    return (
        <AdminPageShell>
            <main className="mx-auto w-full max-w-[1080px] px-5 py-8 sm:px-8 sm:py-10">
                <Dashboard />
            </main>
        </AdminPageShell>
    )
}
