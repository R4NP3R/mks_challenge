import { ProductSection } from './components/ProductSection'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { SideBar } from './components/sideBar'
import { GlobalCSS } from './styles'

export function App() {
  return (
    <>
      <GlobalCSS/>
      <SideBar/>
      <Header/>
      <ProductSection/>
      <Footer/>
    </>
  )
}

