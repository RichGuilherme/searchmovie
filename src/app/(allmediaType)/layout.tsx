import '../globals.css'
import { Header } from '@/components/header/Index'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    
  return (

      < >
          <Header />
          {children}
      </>
 
  )
}
