import { getAdminPosts } from "@/shared/api/adminPostApi"

export type DashboardCounts = {
    total: number
    published: number
    draft: number
    main: number
}

export type DashboardData = {
    counts: DashboardCounts
}

const MAIN_SCAN_LIMIT = 50

export async function getDashboardData(): Promise<DashboardData> {
    const [totalRes, publishedRes, draftRes, mainScanRes] = await Promise.all([
        getAdminPosts(1, { limit: 1 }),
        getAdminPosts(1, { limit: 1, isTemp: false }),
        getAdminPosts(1, { limit: 1, isTemp: true }),
        getAdminPosts(1, { limit: MAIN_SCAN_LIMIT, isTemp: false }),
    ])

    return {
        counts: {
            total: totalRes.meta.total,
            published: publishedRes.meta.total,
            draft: draftRes.meta.total,
            main: mainScanRes.data.filter((post) => post.isMain).length,
        },
    }
}
