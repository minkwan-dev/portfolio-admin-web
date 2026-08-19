import { api } from "@/shared/api/axiosInstance"

export type AdminPostStats = {
    total: number
    published: number
    draft: number
    main: number
}

type AdminPostStatsResponse = {
    data: AdminPostStats
}

export async function getAdminPostStats(): Promise<AdminPostStats> {
    const response = await api.get<AdminPostStatsResponse>("/admin/posts/stats")
    return response.data.data
}
