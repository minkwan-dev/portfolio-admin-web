import { AdminSidebar } from "@/shared/components/layout/AdminSidebar"

type AdminShellProps = {
    children: React.ReactNode
}

export function AdminShell({ children }: AdminShellProps) {
    return (
        <div className="flex min-h-dvh flex-col bg-zinc-50/80 text-zinc-950 md:flex-row">
            <AdminSidebar />
            <div className="flex min-w-0 flex-1 flex-col pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-0">
                {children}
            </div>
        </div>
    )
}
