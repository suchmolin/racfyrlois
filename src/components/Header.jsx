
import SectionSeparator from './SectionSeparator'

function Header() {
    return (
        <header className="w-full pt-8 md:pt-6 sm:py-4 text-center overflow-hidden" style={{ backgroundColor: '#97D700' }}>
            <div className="relative">
                {/* Logo centrado */}
                <div className="mb-8 md:mb-6 sm:mb-4">
                    <img
                        src="/img/logo.webp"
                        alt="FYR LOIS Logo"
                        className="max-w-[200px] md:max-w-[150px] sm:max-w-[120px] h-auto mx-auto block"
                    />
                </div>

                {/* Slogan */}
                <div className="mb-8 md:mb-6 sm:mb-4">
                    <h1 className="italic text-4xl font-eastman font-black text-[#001A70]">
                        ¡Aprender inglés <span className="text-white block font-normal">es soñar sin fronteras!</span>
                    </h1>
                </div>

                {/* Imagen principal como fondo */}
                <div className="relative">
                    <div
                        className="w-full mt-0 mb-8 md:mb-6 sm:mb-4 relative h-[45dvh] bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: 'url(/img/imageninicio.webp)' }}
                    >

                    </div>



                    {/* Título del año escolar con fondo blanco */}
                    <div className="bg-white py-4 -mt-28 md:-mt-6 sm:-mt-4 pb-20">
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
