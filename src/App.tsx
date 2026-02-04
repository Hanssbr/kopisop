import { Navbar } from './components/Navbar'
import { Slider } from './components/Slider'
import './index.css'
import { LandingPage } from './pages/LandingPage'
import { MenuPage } from './pages/MenuPage'

function App() {

  return (
    <>
      <Navbar/>
      <LandingPage/>
      <Slider/>
      <MenuPage/>
    </>
  )
}

export default App