export function AdminPostListSkeleton() {
    return (
        <div className="overflow-hidden bg-surface">
            <div className="flex flex-col">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div
                        key={index}
                        className="border-b border-border-soft px-5 py-4 last:border-0"
                    >
                        <div className="h-5 w-3/4 max-w-sm animate-pulse rounded-lg bg-border" />
                        <div className="mt-3 h-4 w-28 animate-pulse rounded bg-border-soft" />
                    </div>
                ))}
            </div>
        </div>
    )
}
