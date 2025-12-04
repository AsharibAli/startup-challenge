import type React from "react"
import type { Metadata } from "next"
import { Inter, Source_Code_Pro } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})
const codePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "GIAIC Sir Asharib Class Startup Challenge",
  description: "Build Your Startup, Win $1000 Rewards - A 3-month challenge by Sir Asharib Ali",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>

      </head>
      <body className={`${inter.variable} ${codePro.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
