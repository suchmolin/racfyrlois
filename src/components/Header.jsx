
import SectionSeparator from './SectionSeparator'

function Header() {
    return (
        <header className="w-full pt-8 md:pt-32 min-[1440px]:pt-52 sm:py-4 text-center overflow-hidden md:bg-[url('/img/INICIO2.webp')] bg-right bg-cover bg-no-repeat bg-[#97D700] md:bg-transparent">
            <div className="relative md:flex w-full md:w-6/12">
                {/* Logo centrado */}
                <div className="mb-8 md:mb-6 sm:mb-4 block md:hidden">
                    <img
                        src="/img/logo.webp"
                        alt="FYR LOIS Logo"
                        className="max-w-[200px] min-[650px]:max-w-[150px] h-auto mx-auto block"
                    />
                </div>

                {/* Slogan */}
                <div className="mb-8 md:mb-6 sm:mb-4 md:ml-5 min-[950px]:ml-14 min-[1950px]:ml-32">
                    <h1 className="italic text-4xl md:text-2xl min-[650px]:text-5xl min-[900px]:text-3xl lg:text-4xl xl:text-5xl min-[1440px]:text-5xl min-[1700px]:text-6xl min-[1950px]:text-7xl font-eastman font-black text-[#001A70]">
                        ¡Aprender inglés <span className="text-white block font-normal">es soñar sin fronteras!</span>
                    </h1>
                    <div className='hidden md:flex flex-col items-center'>
                        <img src="/img/backtodream.png" alt="Back to dream" className="w-[280px] min-[900px]:w-[300px] lg:w-[380px] xl:w-[500px] min-[1440px]:w-[550px] min-[1700px]:w-[600px] min-[1950px]:w-[680px] h-auto" />
                        <h2 className="text-2xl md:text-xl sm:text-2xl xl:text-3xl min-[1440px]:text-4xl min-[1700px]:text-5xl text-white m-0 drop-shadow-lg tracking-wide font-eastman font-black -mt-7">
                            Año Escolar <span className="font-lemon text-[#001A70]">2025-2026</span>
                        </h2>
                        <img src="/img/ESTRELLA1.webp" alt="estrella" className="w-[60px] min-[900px]:w-[80px] lg:w-[100px] xl:w-[130px] min-[1440px]:w-[160px] min-[1700px]:w-[180px] min-[1950px]:w-[200px] h-auto" />
                        <h2 className="md:text-xl min-[900px]:text-2xl lg:text-3xl min-[1440px]:text-4xl min-[1700px]:text-5xl leading-7 font-eastman font-black italic bg-white text-nowrap rounded-md text-[#001A70] px-2 min-[1440px]:px-4 py-1 min-[1440px]:py-2 my-3">
                            ¡Inscripciones abiertas!
                        </h2>
                    </div>
                </div>

                {/* Imagen principal como fondo */}
                <div className="relative block md:hidden">
                    <div
                        className="w-full mt-0 mb-8 relative h-[45dvh] min-[490px]:h-[60dvh] min-[650px]:h-[70dvh] bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: 'url(/img/imageninicio.webp)' }}
                    >

                    </div>



                    {/* Título del año escolar con fondo blanco */}
                    <div className="bg-white pt-4 min-[650px]:pt-10 -mt-28 min-[490px]:-mt-32 min-[650px]:-mt-40 md:-mt-6 sm:-mt-4 pb-20 block md:hidden">
                        <h2 className="text-2xl md:text-3xl sm:text-2xl text-[#001A70] m-0 drop-shadow-lg tracking-wide font-eastman font-black pt-20">
                            Año Escolar <span className="font-lemon">2025-2026</span>
                        </h2>
                    </div>
                </div>
            </div>
            <SectionSeparator />
        </header>
    )
}

export default Header
