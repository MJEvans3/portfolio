import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { BackgroundPaths } from "@/components/ui/background-paths"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mehmet John Evans | Portfolio",
  description: "Personal portfolio website showcasing my work experience, projects, and journey.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* BackgroundPaths background */}
        <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', width: '100vw', height: '100vh' }}>
          <BackgroundPaths />
        </div>
        {/* Main content above background */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  )
}
