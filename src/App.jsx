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
    <div className="min-h-screen overflow-hidden font-eastman">
      <Navbar />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <SomosUnaEmpresa />
      <FeaturesGrid />
      <h2 className='text-3xl sm:text-4xl lg:text-6xl xl:text-7xl min-[1960px]:text-8xl text-[#001A70] text-center font-black leading-7 pt-20 sm:pt-28 lg:pt-44 min-[1700px]:pt-64'>¡Una formación <br /> continua de alto nivel!</h2>

      <div className="flex justify-center w-full">
        <h2 className='text-white bg-[#001A70] text-xl sm:text-3xl lg:text-4xl xl:text-5xl min-[1960px]:text-6xl py-1 lg:py-4 xl:py-8 px-3 lg:px-8 rounded-lg lg:rounded-2xl text-center font-bold mt-5 w-fit xl:leading-[50px]'>
          Guiamos a tu hijo en su formación en inglés, <br />
          con una enseñanza adaptada a su edad
        </h2>
      </div>
      <KidsSection />
      <KidsInfoSection />
      <div className="flex flex-col items-center w-full bg-[#001A70] overflow-hidden -mt-1">

        <h2 className='text-[#001A70] bg-[#FFA400] w-fit rounded-md 2xl:rounded-lg text-3xl lg:text-5xl 2xl:text-6xl py-2 lg:py-2 px-4 lg:px-6 font-black italic flex items-center mb-7 xl:mb-20'>¡QUIERO INSCRIBIRLO! <BsFillLightningChargeFill className='text-3xl text-white inline-block ml-3' /></h2>
        <div className='w-[150%] bg-white pb-60 rounded-t-[50%]'></div>
      </div>
      <div className="w-full flex flex-col items-center bg-white pt-10 relative -mt-52 pb-[270px] min-[400px]:pb-[350px] min-[540px]:pb-[450px] min-[650px]:pb-[550px]  min-[800px]:pb-[650px] min-[935px]:pb-[750px] min-[1065px]:pb-[850px] min-[1185px]:pb-[950px] min-[1300px]:pb-[1050px] min-[1460px]:pb-[1150px] min-[1590px]:pb-[1250px] min-[1720px]:pb-[1350px] min-[1850px]:pb-[1450px]  min-[1980px]:pb-[1550px]">
        <div className="w-fit relative ">

          <h3 className="text-2xl min-[650px]:text-4xl min-[800px]:text-5xl min-[1185px]:text-6xl min-[1460px]:text-7xl bg-[#001A70] p-4 md:p-8 text-white text-center rounded-lg relative font-bold text-nowrap z-10 leading-7">
            ¡ESTE ES SU MOMENTO <br /> DE SOÑAR JUNTO AL IDIOMA!
          </h3>
          <div className="w-[120px] md:w-[220px] 2xl:w-[320px] h-[80px] 2xl:h-[150px] rounded-lg -rotate-[22deg] absolute -bottom-5 right-10 bg-[#001A70]"></div>
        </div>
        <img src="/img/AMARILLORAYO.webp" alt="personaje AMARILLORAYO" className="w-full  h-auto absolute bottom-20 lg:bottom-40 2xl:bottom-60 z-20" />
      </div>
      <div className='w-full flex justify-center'>

        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white py-2 2xl:py-6 px-4 2xl:px-8 rounded-md 2xl:rounded-2xl bg-[#97D700] w-fit text-center text-nowrap '>¡Una experiencia de aprendizaje <br />
          que deja huella!</h2>
      </div>
      <TestimonialsSection />
      <div className='bg-[#FFA400] w-full -mt-32 pb-20 min-[465px]:pb-32 min-[759px]:pb-44 lg:pb-60 min-[1414px]:pb-[350px] relative'>
        <div className='rounded-b-[30%] pt-20 bg-white w-full'></div>
        <h2 className='text-2xl min-[475px]:text-3xl min-[759px]:text-4xl lg:text-5xl  min-[1414px]:text-6xl  min-[1900px]:text-7xl text-center leading-7 text-white font-black mt-10 font-eastman  min-[1414px]:pt-20'><span className='text-[#001A70] italic'>¡Escoge el horario</span> que mejor <br />
          se adapte a tu rutina familiar!</h2>


        <img src="/img/NUBECORTADA.webp" alt="NUBES" className="w-full h-auto absolute -bottom-14 min-[465px]:-bottom-24  min-[759px]:-bottom-32 lg:-bottom-44 min-[1414px]:-bottom-64 z-20" />

      </div>
      <Horarios />
      <Formulario />
      <Footer />
    </div>
  )
}

export default App
