export function DashboardSkeleton() {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2">
                    <div className="h-8 w-32 animate-pulse rounded-lg bg-border" />
                    <div className="h-4 w-56 animate-pulse rounded bg-border-soft" />
                </div>
                <div className="h-11 w-24 animate-pulse rounded-xl bg-border" />
            </div>

            <div className="overflow-hidden rounded-2xl bg-surface ring-1 ring-border/60">
                <div className="grid grid-cols-2 sm:grid-cols-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="border-border-soft px-5 py-5 sm:px-6 sm:py-6 [&:not(:last-child)]:border-r [&:nth-child(-n+2)]:border-b sm:[&:nth-child(-n+2)]:border-b-0">
                            <div className="h-4 w-12 animate-pulse rounded bg-border-soft" />
                            <div className="mt-3 h-8 w-10 animate-pulse rounded-lg bg-border" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                <div className="space-y-2 px-1">
                    <div className="h-5 w-20 animate-pulse rounded bg-border" />
                    <div className="h-4 w-48 animate-pulse rounded bg-border-soft" />
                </div>
                <div className="overflow-hidden rounded-2xl bg-surface ring-1 ring-border/60">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div
                            key={index}
                            className="border-b border-border-soft px-5 py-4 last:border-0"
                        >
                            <div className="h-5 w-3/4 max-w-sm animate-pulse rounded bg-border" />
                            <div className="mt-3 h-4 w-28 animate-pulse rounded bg-border-soft" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
