import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import SomosUnaEmpresa from './components/SomosUnaEmpresa'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <SomosUnaEmpresa />
    </div>
  )
}

export default App
