import { Navbar } from './components/Navbar'
import { Slider } from './components/Slider'
import './index.css'
import { LandingPage } from './pages/LandingPage'
import { MenuDetailPage } from './pages/MenuDetailPage'
import { MenuPage } from './pages/MenuPage'

function App() {

  return (
    <>
      <Navbar/>
      <LandingPage/>
      <Slider/>
      <MenuPage/>
      <MenuDetailPage/>
    </>
  )
}

export default App