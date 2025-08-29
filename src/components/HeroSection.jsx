function HeroSection() {
    return (
        <section className="relative w-full bg-[#001A70] pt-16 md:py-12 sm:py-8 overflow-hidden -mt-20">
            <div className="container mx-auto px- text-center">

                {/* Banner superior blanco con inscripciones */}
                <div className="mb-8 md:mb-6 sm:mb-4">
                    <div className="inline-block bg-white rounded-md px-2 py-2 shadow-lg">
                        <h2 className="text-3xl md:text-xl sm:text-lg font-eastman font-black italic text-[#001A70] text-nowrap">
                            ¡Inscripciones abiertas!
                        </h2>
                    </div>
                </div>

                {/* Texto principal en inglés */}
                <div className="mb-12 md:mb-10 sm:mb-8">
                    <h1 className="text-3xl md:text-4xl sm:text-3xl font-eastman font-black italic text-white mb-">
                        English for life.
                    </h1>
                    <h2 className="text-3xl md:text-4xl sm:text-3xl font-eastman font-black italic text-white">
                        English for <span className="text-[#97D700]">GOALS.</span>
                    </h2>
                </div>

                {/* Eslogan en español */}
                <div className="bg-[#eeeeef] rounded-t-[15%] pt-16 pb-8">
                    <div className="">
                        <h3 className="text-lg md:text-2xl sm:text-xl font-eastman font-black text-[#001A70] leading-tight text-nowrap text-center">
                            <span className="mb-2 block">¡Haz que el inglés sea el impulso</span>

                            para que {" "}
                            <span className=" bg-[#001A70] py-1 px-2 text-white rounded-md">
                                tu hijo logre sus sueños!
                            </span>
                        </h3>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HeroSection
