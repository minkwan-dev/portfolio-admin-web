"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, PenSquare } from "lucide-react"

const navItems = [
    { href: "/dashboard", label: "대시보드", icon: LayoutDashboard, exact: true },
    { href: "/posts/new", label: "글 작성", icon: PenSquare, exact: false },
] as const

function isNavActive(pathname: string, href: string, exact: boolean): boolean {
    if (exact) return pathname === href
    return pathname.startsWith(href)
}

export function AdminSidebar() {
    const pathname = usePathname()

    return (
        <>
            <aside className="hidden w-60 shrink-0 flex-col border-r border-zinc-200/80 bg-white md:flex">
                <div className="px-5 py-6">
                    <span className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400">
                        Portfolio
                    </span>
                    <p className="mt-1 text-lg font-semibold tracking-tight">Admin</p>
                </div>

                <nav className="flex flex-col gap-1.5 px-3 pb-6">
                    {navItems.map(({ href, label, icon: Icon, exact }) => {
                        const active = isNavActive(pathname, href, exact)

                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all ${
                                    active
                                        ? "bg-zinc-950 text-white shadow-sm"
                                        : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
                                }`}
                            >
                                <Icon className="h-4 w-4 shrink-0" />
                                {label}
                            </Link>
                        )
                    })}
                </nav>
            </aside>

            <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200/80 bg-white/90 backdrop-blur-md md:hidden pb-[env(safe-area-inset-bottom)]">
                <div className="mx-auto flex max-w-md items-stretch gap-1 p-2">
                    {navItems.map(({ href, label, icon: Icon, exact }) => {
                        const active = isNavActive(pathname, href, exact)

                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`flex flex-1 flex-col items-center gap-1 rounded-xl py-2.5 text-[11px] font-medium transition-colors ${
                                    active ? "bg-zinc-950 text-white" : "text-zinc-500"
                                }`}
                            >
                                <Icon className="h-5 w-5" />
                                {label}
                            </Link>
                        )
                    })}
                </div>
            </nav>
        </>
    )
}
