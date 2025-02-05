import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import Navbar from '@/components/NavBar'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <AppRouterCacheProvider>
        <body>
          <Navbar />
          <div className='w-3/4 mx-auto'>{children}</div>
        </body>
      </AppRouterCacheProvider>
    </html>
  )
}
