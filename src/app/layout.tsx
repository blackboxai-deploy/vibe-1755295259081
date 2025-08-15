import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hello World App',
  description: 'A simple and elegant Hello World application built with Next.js',
  keywords: ['hello world', 'nextjs', 'react', 'typescript'],
  authors: [{ name: 'Developer' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {children}
      </body>
    </html>
  )
}