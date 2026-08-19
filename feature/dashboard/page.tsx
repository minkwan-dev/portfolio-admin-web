import { Dashboard } from "@/feature/dashboard/components/Dashboard"
import { AdminPageShell } from "@/shared/components/AdminPageShell"

export default function DashboardPage() {
    return (
        <AdminPageShell>
            <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 md:py-10">
                <Dashboard />
            </main>
        </AdminPageShell>
    )
}
