"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, PenLine } from "lucide-react"

const navItems = [
    { href: "/dashboard", label: "대시보드", icon: LayoutDashboard, exact: true },
    { href: "/posts/new", label: "글 작성", icon: PenLine, exact: false },
] as const

function isNavActive(pathname: string, href: string, exact: boolean): boolean {
    if (exact) return pathname === href
    return pathname.startsWith(href)
}

export function AdminSidebar() {
    const pathname = usePathname()

    return (
        <>
            <aside className="hidden w-[220px] shrink-0 flex-col bg-surface md:flex">
                <div className="px-5 py-6">
                    <span className="font-mono text-[13px] font-semibold tracking-tight text-ink">
                        {"< Admin />"}
                    </span>
                </div>

                <nav className="flex flex-col gap-0.5 px-3">
                    {navItems.map(({ href, label, icon: Icon, exact }) => {
                        const active = isNavActive(pathname, href, exact)

                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`flex h-10 items-center gap-2.5 rounded-[10px] px-3 text-[14px] transition-colors ${
                                    active
                                        ? "bg-border-soft font-semibold text-ink"
                                        : "font-medium text-muted hover:bg-border-soft/70 hover:text-ink"
                                }`}
                            >
                                <Icon
                                    strokeWidth={active ? 2 : 1.75}
                                    className={`h-[18px] w-[18px] shrink-0 ${
                                        active ? "text-accent" : "text-subtle"
                                    }`}
                                />
                                {label}
                            </Link>
                        )
                    })}
                </nav>
            </aside>

            <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface/95 backdrop-blur-sm md:hidden pb-[env(safe-area-inset-bottom)]">
                <div className="mx-auto flex max-w-lg px-2">
                    {navItems.map(({ href, label, icon: Icon, exact }) => {
                        const active = isNavActive(pathname, href, exact)

                        return (
                            <Link
                                key={href}
                                href={href}
                                className="relative flex flex-1 flex-col items-center gap-1 py-2.5"
                            >
                                <Icon
                                    strokeWidth={active ? 2 : 1.75}
                                    className={`h-5 w-5 ${active ? "text-accent" : "text-subtle"}`}
                                />
                                <span
                                    className={`text-[11px] ${
                                        active ? "font-semibold text-ink" : "font-medium text-muted"
                                    }`}
                                >
                                    {label}
                                </span>
                                {active ? (
                                    <span className="absolute top-1.5 h-1 w-1 rounded-full bg-accent" />
                                ) : null}
                            </Link>
                        )
                    })}
                </div>
            </nav>
        </>
    )
}
