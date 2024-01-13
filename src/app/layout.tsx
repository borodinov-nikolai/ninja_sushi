import ThemeProvider from '@/features/configs/themeProvider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/features/styles/global.scss'
import { Header } from '@/widgets/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Header/>
        {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
