"use client"

import { useSuspenseQuery } from "@tanstack/react-query"
import { dashboardQueryKeys } from "@/feature/dashboard/api/dashboardQueryKeys"
import { getDashboardData } from "@/feature/dashboard/api/getDashboardData"

export function useDashboardQuery() {
    return useSuspenseQuery({
        queryKey: dashboardQueryKeys.stats(),
        queryFn: getDashboardData,
    })
}
