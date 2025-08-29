

function FeaturesSection() {
    return (
        <section className="relative w-full bg-[#eeeeef] rounded-b-[15%] py-16 md:py-12 sm:py-8 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="w-[370px] mx-auto space-y-2">

                    {/* Banner 1 - Azul oscuro */}
                    <div className="bg-[#001A70] rounded-2xl py-2 px-2 text-white shadow-lg w-9/12 ml-auto">
                        <div className="flex items-center justify-end">
                            <div className="w-8/12 text-right">
                                <div className="text-[#FFA400] font-eastman font-black text-2xl pr-4 italic leading-5">
                                    Adaptado <br /> a su edad
                                </div>

                            </div>
                            <div className="w-4/12 flex flex-col justify-center items-center pr-2">
                                <div className="text-3xl font-lemon font-black text-nowrap">3-16</div>
                                <div className="text-2xl font-eastman font-black -mt-2 italic">años</div>
                            </div>
                        </div>
                    </div>

                    {/* Banner 2 - Verde lima */}
                    <div className="bg-[#97D700] rounded-2xl p-2 text-white shadow-lg w-9/12 ml-auto relative">
                        <div className="flex items-center mx-4">
                            <div className="w-3/12 text-left">
                                <div className="text-7xl font-lemon font-black pr-4">3</div>
                            </div>
                            <div className="w-1/2 text-left">
                                <div className="text-2xl leading-5 font-eastman font-black">lapsos</div>
                            </div>
                        </div>
                        <img src="/img/TOUCH.png" alt="personaje verde touch" className="absolute bottom-0 -left-[130px] w-[170px] h-auto" />
                    </div>

                    {/* Banner 3 - Azul oscuro */}
                    <div className="bg-[#001A70] rounded-2xl p-2 text-white shadow-lg w-10/12 relative">
                        <div className="w-full flex items-center">
                            <div className="w-7/12 text-right">
                                <div className="text-7xl font-lemon lemon font-black pr-2">16</div>
                            </div>
                            <div className="w-3/12 text-left">
                                <div className="text-xl leading-5 font-eastman font-black">Horas mensuales</div>
                            </div>
                        </div>
                        <img src="/img/WONDER.png" alt="personaje naranja wonder" className="absolute bottom-0 left-[260px] w-[170px] h-auto" />
                    </div>

                    {/* Banner 4 - Naranja */}
                    <div className="bg-[#FFA400] rounded-2xl p-2 text-white shadow-lg">
                        <div className="flex items-center mx-4">
                            <div className="w-1/2 text-right">
                                <div className="text-7xl font-lemon font-bold text-[#001A70] pr-2">48</div>
                            </div>
                            <div className="w-1/2 text-left">
                                <div className="text-2xl leading-5 font-eastman font-black">Horas por lapso</div>
                            </div>
                        </div>
                    </div>

                    {/* Banner 5 - Rosado */}
                    <div className="bg-[#D60078] rounded-2xl p-2 text-white shadow-lg">
                        <div className="flex items-center mx-4">
                            <div className="w-1/2 text-right">
                                <div className="text-7xl font-lemon font-bold text-[#001A70]  pr-2">8</div>
                            </div>
                            <div className="w-1/2 text-left">
                                <div className="text-2xl leading-5 font-eastman font-black text-nowrap">Alumnos <br /> por grupo</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg-[#eeeeef] rounded-b-[15%] pt-10 flex justify-center w-full">

                <h2 className="w-fit text-3xl py-2 px-4 bg-white text-[#001A70] font-black italic -mb-10">¡INSCRÍBELO AHORA!</h2>
            </div>
        </section>
    )
}

export default FeaturesSection
