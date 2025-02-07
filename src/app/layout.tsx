import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import Navbar from '@/components/NavBar'
import QueryProvider from './providers/QueryProvider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <AppRouterCacheProvider>
        <body>
          <QueryProvider>
            <Navbar />
            <div className='w-3/4 mx-auto'>{children}</div>
            <ReactQueryDevtools />
          </QueryProvider>
        </body>
      </AppRouterCacheProvider>
    </html>
  )
}
