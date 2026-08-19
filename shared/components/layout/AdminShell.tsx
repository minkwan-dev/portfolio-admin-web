import { AdminSidebar } from "@/shared/components/layout/AdminSidebar"

type AdminShellProps = {
    children: React.ReactNode
}

export function AdminShell({ children }: AdminShellProps) {
    return (
        <div className="flex min-h-dvh bg-gray-50 text-black">
            <AdminSidebar />
            <div className="flex min-w-0 flex-1 flex-col">{children}</div>
        </div>
    )
}
