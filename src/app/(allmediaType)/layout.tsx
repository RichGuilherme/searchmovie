import '../globals.css'
import { Header } from '@/components/header/Index'

export const metadata = {
  title: 'Create Next App',
  description: 'Parte de filmes',
}

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
