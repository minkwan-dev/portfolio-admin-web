import { AdminSidebar } from "@/shared/components/layout/AdminSidebar"

type AdminShellProps = {
    children: React.ReactNode
}

export function AdminShell({ children }: AdminShellProps) {
    return (
        <div className="flex min-h-dvh flex-col bg-gray-50 text-black md:flex-row">
            <AdminSidebar />
            <div className="flex min-w-0 flex-1 flex-col pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
                {children}
            </div>
        </div>
    )
}
