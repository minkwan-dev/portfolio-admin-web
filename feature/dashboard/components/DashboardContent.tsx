"use client"

import { useDashboardQuery } from "@/feature/dashboard/api/useDashboardQuery"
import { DashboardOverview } from "@/feature/dashboard/components/DashboardOverview"
import { DashboardPostsSection } from "@/feature/dashboard/components/DashboardPostsSection"

export function DashboardContent() {
    const { data } = useDashboardQuery()

    return (
        <div className="flex flex-col gap-8 sm:gap-10">
            <DashboardOverview counts={data.counts} />
            <DashboardPostsSection />
        </div>
    )
}
