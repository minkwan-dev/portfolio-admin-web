"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import {
    createAdminPost,
    deleteAdminPost,
    updateAdminPost,
} from "@/shared/api/adminPostApi"
import type { SavePostInput } from "@/shared/model/admin-post.types"
import { adminPostQueryKeys } from "@/feature/admin-post/api/adminPostQueryKeys"
import { dashboardQueryKeys } from "@/feature/dashboard/api/dashboardQueryKeys"

function invalidatePostQueries(queryClient: ReturnType<typeof useQueryClient>, postId?: number) {
    if (postId !== undefined) {
        void queryClient.invalidateQueries({ queryKey: adminPostQueryKeys.detail(postId) })
    }
    void queryClient.invalidateQueries({ queryKey: adminPostQueryKeys.all })
    void queryClient.invalidateQueries({ queryKey: dashboardQueryKeys.all })
}

type DeleteAdminPostMutationOptions = {
    redirectToList?: boolean
}

export function useCreateAdminPostMutation() {
    const queryClient = useQueryClient()
    const router = useRouter()

    return useMutation({
        mutationFn: (input: SavePostInput) => createAdminPost(input),
        onSuccess: (post) => {
            invalidatePostQueries(queryClient)
            router.push(`/posts/${post.id}/edit`)
        },
    })
}

export function useUpdateAdminPostMutation(postId: number) {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (input: Partial<SavePostInput>) => updateAdminPost(postId, input),
        onSuccess: () => {
            invalidatePostQueries(queryClient, postId)
        },
    })
}

export function useDeleteAdminPostMutation(
    postId: number,
    { redirectToList = true }: DeleteAdminPostMutationOptions = {},
) {
    const queryClient = useQueryClient()
    const router = useRouter()

    return useMutation({
        mutationFn: () => deleteAdminPost(postId),
        onSuccess: () => {
            invalidatePostQueries(queryClient)

            if (redirectToList) {
                router.push("/dashboard")
            }
        },
    })
}
