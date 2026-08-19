"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileText, LayoutDashboard, PenSquare } from "lucide-react"

const navItems = [
    { href: "/dashboard", label: "대시보드", icon: LayoutDashboard, exact: true },
    { href: "/posts", label: "글 목록", icon: FileText, exact: true },
    { href: "/posts/new", label: "새 글 작성", icon: PenSquare, exact: false },
] as const

function isNavActive(pathname: string, href: string, exact: boolean): boolean {
    if (exact) return pathname === href
    return pathname.startsWith(href)
}

function navLinkClassName(active: boolean, mobile = false) {
    if (mobile) {
        return `flex flex-1 flex-col items-center gap-1 rounded-lg px-2 py-2 text-[11px] font-medium transition-colors ${
            active ? "text-black" : "text-gray-500"
        }`
    }

    return `flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
        active
            ? "bg-black text-white"
            : "text-gray-600 hover:bg-gray-100 hover:text-black"
    }`
}

export function AdminSidebar() {
    const pathname = usePathname()

    return (
        <>
            <aside className="hidden w-56 shrink-0 flex-col border-r border-gray-200 bg-white md:flex">
                <div className="border-b border-gray-200 px-4 py-5">
                    <span className="font-mono text-sm font-semibold tracking-tight">
                        {"< Admin />"}
                    </span>
                </div>

                <nav className="flex flex-col gap-1 p-3">
                    {navItems.map(({ href, label, icon: Icon, exact }) => {
                        const active = isNavActive(pathname, href, exact)

                        return (
                            <Link
                                key={href}
                                href={href}
                                className={navLinkClassName(active)}
                            >
                                <Icon className="h-4 w-4 shrink-0" />
                                {label}
                            </Link>
                        )
                    })}
                </nav>
            </aside>

            <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur md:hidden pb-[env(safe-area-inset-bottom)]">
                <div className="mx-auto flex max-w-lg items-stretch px-2 pt-1">
                    {navItems.map(({ href, label, icon: Icon, exact }) => {
                        const active = isNavActive(pathname, href, exact)

                        return (
                            <Link
                                key={href}
                                href={href}
                                className={navLinkClassName(active, true)}
                            >
                                <Icon className={`h-5 w-5 ${active ? "text-black" : "text-gray-400"}`} />
                                {label}
                            </Link>
                        )
                    })}
                </div>
            </nav>
        </>
    )
}
