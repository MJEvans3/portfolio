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
        {/* Fixed background with paths */}
        <div className="fixed inset-0 w-full h-full z-0 pointer-events-none" style={{ backgroundColor: 'rgb(220, 220, 220)' }}>
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
