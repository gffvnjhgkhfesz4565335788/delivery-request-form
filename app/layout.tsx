import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delivery Form',
  description: 'Submit your delivery request',
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
