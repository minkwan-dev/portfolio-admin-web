import Link from "next/link"
import { ArrowUpRight, FilePen, Sparkles, Upload } from "lucide-react"
import type { DashboardCounts } from "@/feature/dashboard/api/getDashboardData"

type DashboardOverviewProps = {
    counts: DashboardCounts
}

const statCards = [
    {
        key: "published" as const,
        label: "발행됨",
        icon: Upload,
        accent: "from-emerald-500/20 to-emerald-500/5",
        iconColor: "text-emerald-600",
    },
    {
        key: "draft" as const,
        label: "임시저장",
        icon: FilePen,
        accent: "from-amber-500/20 to-amber-500/5",
        iconColor: "text-amber-600",
    },
    {
        key: "main" as const,
        label: "메인 노출",
        icon: Sparkles,
        accent: "from-violet-500/20 to-violet-500/5",
        iconColor: "text-violet-600",
    },
]

export function DashboardOverview({ counts }: DashboardOverviewProps) {
    return (
        <section className="grid gap-3 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto]">
            <div className="relative overflow-hidden rounded-3xl bg-zinc-950 p-6 text-white shadow-xl shadow-zinc-950/10 sm:p-8 lg:col-span-2 lg:row-span-3">
                <div
                    className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl"
                    aria-hidden="true"
                />
                <div
                    className="pointer-events-none absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl"
                    aria-hidden="true"
                />

                <div className="relative flex h-full flex-col justify-between gap-8">
                    <div>
                        <p className="text-sm font-medium text-zinc-400">블로그 현황</p>
                        <p className="mt-4 text-5xl font-bold tracking-tight tabular-nums sm:text-6xl">
                            {counts.total}
                        </p>
                        <p className="mt-2 text-sm text-zinc-400">전체 글</p>
                    </div>

                    <Link
                        href="/posts/new"
                        className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        새 글 작성
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>

            {statCards.map(({ key, label, icon: Icon, accent, iconColor }) => (
                <div
                    key={key}
                    className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-950/5 transition-shadow hover:shadow-md"
                >
                    <div
                        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition-opacity group-hover:opacity-100`}
                        aria-hidden="true"
                    />
                    <div className="relative flex items-start justify-between gap-3">
                        <div>
                            <p className="text-sm font-medium text-zinc-500">{label}</p>
                            <p className="mt-2 text-3xl font-bold tracking-tight tabular-nums">
                                {counts[key]}
                            </p>
                        </div>
                        <div className={`rounded-xl bg-zinc-100 p-2.5 ${iconColor}`}>
                            <Icon className="h-4 w-4" />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}
