import { AdminShell } from "@/shared/components/layout/AdminShell"

export default function ShellLayout({ children }: { children: React.ReactNode }) {
    return <AdminShell>{children}</AdminShell>
}
