import { api } from "@/shared/api/axiosInstance"
import type {
    AdminPostDetail,
    AdminPostDetailResponse,
    AdminPostsResponse,
    SavePostInput,
} from "@/shared/model/admin-post.types"

export type GetAdminPostsOptions = {
    limit?: number
    isTemp?: boolean
    isDeleted?: boolean
}

export async function getAdminPosts(
    page = 1,
    options?: GetAdminPostsOptions,
): Promise<AdminPostsResponse> {
    const response = await api.get<AdminPostsResponse>("/admin/posts", {
        params: {
            page,
            limit: options?.limit ?? 20,
            ...(options?.isTemp !== undefined && { isTemp: options.isTemp }),
            ...(options?.isDeleted !== undefined && { isDeleted: options.isDeleted }),
        },
    })
    return response.data
}

export async function getAdminPostById(id: number): Promise<AdminPostDetail> {
    const response = await api.get<AdminPostDetailResponse>(`/admin/posts/${id}`)
    return response.data.data
}

export async function createAdminPost(input: SavePostInput): Promise<AdminPostDetail> {
    const response = await api.post<AdminPostDetailResponse>("/admin/posts", input)
    return response.data.data
}

export async function updateAdminPost(
    id: number,
    input: Partial<SavePostInput>,
): Promise<AdminPostDetail> {
    const response = await api.patch<AdminPostDetailResponse>(`/admin/posts/${id}`, input)
    return response.data.data
}

export async function deleteAdminPost(id: number): Promise<void> {
    await api.delete(`/admin/posts/${id}`)
}
