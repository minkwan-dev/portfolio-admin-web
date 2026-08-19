import { getAdminPostStats } from "@/shared/api/adminPostStatsApi"

export type DashboardCounts = {
    total: number
    published: number
    draft: number
    main: number
}

export type DashboardData = {
    counts: DashboardCounts
}

export async function getDashboardData(): Promise<DashboardData> {
    const counts = await getAdminPostStats()

    return { counts }
}
