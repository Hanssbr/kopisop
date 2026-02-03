import { Navbar } from './components/Navbar'
import { Slider } from './components/Slider'
import './index.css'
import { LandingPage } from './pages/LandingPage'

function App() {

  return (
    <>
      <Navbar/>
      <LandingPage/>
      <Slider/>
    </>
  )
}

export default App