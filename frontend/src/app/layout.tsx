import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Author Name | Official Website",
  description:
    "Official website of Author Name, award-winning novelist and storyteller",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-7xl mx-auto">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
