type AdminPageShellProps = {
    children: React.ReactNode
}

export function AdminPageShell({ children }: AdminPageShellProps) {
    return <div className="flex flex-1 flex-col bg-canvas text-ink">{children}</div>
}
