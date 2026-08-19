import Link from "next/link"
import { PenLine, Trash2 } from "lucide-react"

type AdminPostRowActionButtonsProps = {
    postId: number
    postTitle: string
    isDeleting: boolean
    onDeleteClick: () => void
}

export function AdminPostRowActionButtons({
    postId,
    postTitle,
    isDeleting,
    onDeleteClick,
}: AdminPostRowActionButtonsProps) {
    return (
        <div className="flex items-center gap-0.5">
            <Link
                href={`/posts/${postId}/edit`}
                aria-label={`"${postTitle}" 수정`}
                className="rounded-lg p-2 text-subtle transition-colors hover:bg-border-soft hover:text-ink"
            >
                <PenLine strokeWidth={1.75} className="h-4 w-4" />
            </Link>
            <button
                type="button"
                aria-label={`"${postTitle}" 삭제`}
                disabled={isDeleting}
                onClick={onDeleteClick}
                className="rounded-lg p-2 text-subtle transition-colors hover:bg-red-50 hover:text-red-500 disabled:opacity-50"
            >
                <Trash2 strokeWidth={1.75} className="h-4 w-4" />
            </button>
        </div>
    )
}
