import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import FeaturesGrid from './components/FeaturesGrid'
import KidsSection from './components/KidsSection'
import KidsInfoSection from './components/KidsInfoSection'
import TestimonialsSection from './components/TestimonialsSection'
import SomosUnaEmpresa from './components/SomosUnaEmpresa'
import { BsFillLightningChargeFill } from "react-icons/bs";
import Horarios from './components/Horarios'
import Formulario from './components/Formulario'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <SomosUnaEmpresa />
      <FeaturesGrid />
      <h2 className='text-3xl text-[#001A70] text-center font-bold leading-7'>¡Una formación <br /> continua de alto nivel!</h2>

      <div className="flex justify-center w-full">
        <h2 className='text-white bg-[#001A70] text-xl py-1 px-3 rounded-lg text-center font-bold my-5 w-fit'>
          Acompañamos el proceso de formación <br />
          en inglés de tu hijo con una enseñanza<br />
          adecuada para cada etapa de aprendizaje.<br />
        </h2>
      </div>
      <KidsSection />
      <KidsInfoSection />
      <div className="flex flex-col items-center w-full bg-[#001A70] overflow-hidden">

        <h2 className='text-[#001A70] bg-[#FFA400] text-3xl py-2 px-4 rounded-lg font-black flex-nowrap text-nowrap  w-fit flex items-center mb-7'>¡QUIERO INSCRIBIRLO! <BsFillLightningChargeFill className='text-3xl text-white inline-block ml-3' /></h2>
        <div className='w-[150%] bg-white pb-60 rounded-t-[50%]'></div>
      </div>
      <div className="w-full flex flex-col items-center bg-white py-10 relative -mt-52">
        <div className="w-fit relative">

          <h3 className="text-2xl bg-[#001A70] p-4 text-white text-center rounded-lg relative font-bold text-nowrap z-10 leading-7">
            ¡ESTE ES SU MOMENTO <br /> DE SOÑAR JUNTO AL IDIOMA!
          </h3>
          <div className="w-[120px] h-[80px] rounded-lg -rotate-[22deg] absolute -bottom-5 right-10 bg-[#001A70]"></div>
        </div>
      </div>
      <div className='w-full flex justify-center'>

        <h2 className='text-2xl font-bold text-white py-2 px-4 rounded-md bg-[#97D700] w-fit text-center text-nowrap mt-20'>¡Una experiencia de aprendizaje <br />
          que deja huella!</h2>
      </div>
      <TestimonialsSection />
      <div className='bg-[#FFA400] w-full -mt-32'>
        <div className='rounded-b-[30%] pt-20 bg-white w-full'></div>
        <h2 className='text-2xl text-center leading-7 text-white font-black mt-10'><span className='text-[#001A70] italic'>¡Escoge el horario</span> que mejor <br />
          se adapte a tu rutina familiar!</h2>
      </div>
      <Horarios />
      <Formulario />
      <Footer />
    </div>
  )
}

export default App
