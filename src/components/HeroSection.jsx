import { checkoutHandler } from "../utils/checkoutHandler"

function HeroSection() {
    return (
        <section className="relative w-full bg-[#001A70] md:bg-transparent pt-16 overflow-hidden -mt-20 md:-mt-[80px]">
            <div className="w-full text-center">

                {/* Banner superior blanco con inscripciones */}
                <div className="mb-8 md:mb-6 sm:mb-4 block md:hidden">
                    <div className="inline-block bg-white rounded-md px-2 py-2 shadow-lg">
                        <button onClick={() => checkoutHandler()} className="text-2xl min-[435px]:text-3xl md:text-xl sm:text-lg font-eastman-black italic text-[#001A70] text-nowrap">
                            ¡Inscripciones abiertas!
                        </button>
                    </div>
                </div>

                {/* Texto principal en inglés */}
                <div className="mb-12 md:mb-10 sm:mb-8 block md:hidden">
                    <h1 className="text-3xl md:text-4xl sm:text-3xl font-eastman-black italic text-white mb-">
                        English for life.
                    </h1>
                    <h2 className="text-3xl md:text-4xl sm:text-3xl font-eastman-black italic text-white">
                        English for <span className="text-[#97D700]">GOALS.</span>
                    </h2>
                </div>

                {/* Eslogan en español */}
                <div className="bg-[#eeeeef] rounded-t-[15%] lg:rounded-t-3xl pt-16 pb-8 md:pb-0 w-full">
                    <div className="">
                        <h3 className="text-lg min-[410px]:text-xl md:text-3xl sm:text-2xl lg:text-4xl 2xl:text-6xl font-eastman-black text-[#001A70]  text-nowrap text-center">
                            <span className=" md:mb-0 block">¡Haz que el inglés sea el impulso</span>

                            para que {" "}
                            <span className=" bg-[#001A70] py-1 px-2 text-white rounded-md italic">
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
