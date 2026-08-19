export function DashboardSkeleton() {
    return (
        <div className="flex flex-col gap-8 sm:gap-10">
            <div className="grid gap-3 lg:grid-cols-3">
                <div className="h-64 animate-pulse rounded-3xl bg-zinc-200 lg:col-span-2" />
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="h-28 animate-pulse rounded-2xl bg-zinc-200/80" />
                ))}
            </div>

            <div className="space-y-4">
                <div className="space-y-2">
                    <div className="h-6 w-24 animate-pulse rounded bg-zinc-200" />
                    <div className="h-4 w-48 animate-pulse rounded bg-zinc-100" />
                </div>
                <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-zinc-950/5">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div
                            key={index}
                            className="border-b border-zinc-100 px-4 py-4 last:border-0 sm:px-5"
                        >
                            <div className="h-5 w-3/4 max-w-sm animate-pulse rounded bg-zinc-200" />
                            <div className="mt-3 h-4 w-32 animate-pulse rounded bg-zinc-100" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
