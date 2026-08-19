import { AdminPageShell } from "@/shared/components/AdminPageShell"

export default function DashboardPage() {
    return (
        <AdminPageShell>
            <main className="mx-auto flex w-full max-w-5xl flex-col gap-5 px-4 py-6 sm:gap-6 sm:px-6 sm:py-8 md:py-10">
                <div>
                    <h1 className="text-xl font-bold sm:text-2xl">대시보드</h1>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                        글 통계 및 최근 활동 요약은 추후 API 연동 예정입니다.
                    </p>
                </div>

                <section className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                    {[
                        { label: "전체 글", value: "—" },
                        { label: "임시저장", value: "—" },
                        { label: "발행", value: "—" },
                    ].map((item) => (
                        <div
                            key={item.label}
                            className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5"
                        >
                            <p className="text-sm text-gray-500">{item.label}</p>
                            <p className="mt-2 text-2xl font-bold">{item.value}</p>
                        </div>
                    ))}
                </section>
            </main>
        </AdminPageShell>
    )
}
