import { Footer } from '@/components/footer/Index'
import '../globals.css'
import { Header } from '@/components/header/Index'
import { ParamsDetailsProvider } from '@/context/paramsDetailsContext'
import MoreInfor from './page'

export default function RootLayout() {

  return (

    <ParamsDetailsProvider>
      <Header />
      <MoreInfor />
      <Footer />
    </ParamsDetailsProvider>
  )
}
