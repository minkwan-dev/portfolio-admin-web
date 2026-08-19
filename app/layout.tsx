import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { QueryProvider } from "@/shared/providers/QueryProvider"

const geistSans = Geist({
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Portfolio Admin",
    description: "Portfolio admin dashboard",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko" className="h-full">
            <body
                className={`${geistSans.className} min-h-full flex flex-col bg-white text-black antialiased`}
            >
                <QueryProvider>{children}</QueryProvider>
            </body>
        </html>
    )
}