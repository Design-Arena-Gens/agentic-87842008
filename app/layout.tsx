import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Global Export Solutions - Your Trusted Export Partner',
  description: 'Leading export business facilitating international trade with quality products and reliable logistics solutions worldwide.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
