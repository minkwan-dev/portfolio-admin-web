"use client"

import { DashboardContent } from "@/feature/dashboard/components/DashboardContent"
import { DashboardSkeleton } from "@/feature/dashboard/components/DashboardSkeleton"
import { AsyncBoundary } from "@/shared/components/AsyncBoundary"

export function Dashboard() {
    return (
        <AsyncBoundary
            fallback={<DashboardSkeleton />}
            errorTitle="대시보드를 불러오지 못했어요"
        >
            <DashboardContent />
        </AsyncBoundary>
    )
}
