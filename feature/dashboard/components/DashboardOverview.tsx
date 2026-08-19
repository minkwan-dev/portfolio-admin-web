import Link from "next/link"
import type { DashboardCounts } from "@/feature/dashboard/api/getDashboardData"

type DashboardOverviewProps = {
    counts: DashboardCounts
}

const metrics = [
    { key: "total" as const, label: "전체" },
    { key: "published" as const, label: "발행" },
    { key: "draft" as const, label: "임시저장" },
    { key: "main" as const, label: "메인 노출" },
]

export function DashboardOverview({ counts }: DashboardOverviewProps) {
    return (
        <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-[26px] font-semibold tracking-tight text-ink sm:text-[28px]">
                        대시보드
                    </h1>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
                        블로그 콘텐츠 현황을 확인하고 관리하세요.
                    </p>
                </div>

                <Link
                    href="/posts/new"
                    className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-ink px-5 text-[14px] font-semibold text-white transition-colors hover:bg-[#333d4b]"
                >
                    글 작성
                </Link>
            </div>

            <div
                className="overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-card)] ring-1 ring-border/60"
            >
                <div className="grid grid-cols-2 sm:grid-cols-4 sm:divide-x sm:divide-border-soft">
                    {metrics.map(({ key, label }, index) => (
                        <div
                            key={key}
                            className={`px-5 py-5 sm:px-6 sm:py-6 ${
                                index % 2 === 0 ? "border-r border-border-soft sm:border-r-0" : ""
                            } ${index < 2 ? "border-b border-border-soft sm:border-b-0" : ""}`}
                        >
                            <p className="text-[13px] font-medium text-muted">{label}</p>
                            <p className="mt-2 text-[28px] font-semibold leading-none tracking-tight text-ink tabular-nums sm:text-[32px]">
                                {counts[key]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
