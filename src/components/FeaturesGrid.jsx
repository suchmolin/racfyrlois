import React from 'react';

const FeaturesGrid = () => {
    return (
        <section className="pt-16 pb-24 min-[575px]:pb-44 min-[950px]:pb-64 lg:pb-80 min-[1690px]:pb-96 min-[1700px]:pb-[500px] rounded-t-2xl relative" style={{ backgroundColor: '#97D700' }}>
            <div className=" mx-auto px-4 w-full flex justify-center">
                <div className="sm:w-[600px] lg:w-[800px] min-[1700px]:w-[1200px] grid grid-cols-2 gap-4">
                    {/* Panel 1: Metodología internacional */}
                    <div className="bg-white rounded-2xl min-[1700px]:rounded-[35px] py-3 lg:py-6 px-1 text-center shadow-lg">
                        <div className="mb-1">
                            <img
                                src="/img/METODOLOGIA.webp"
                                alt="CEFR Common European Framework"
                                className="w-24 lg:w-44 min-[1700px]:w-[300px] h-auto mx-auto"
                            />
                        </div>
                        <h3 className="font-eastman-bold text-xl  lg:text-2xl min-[1700px]:text-6xl leading-5" style={{ color: '#001A70' }}>
                            Metodología <br /> internacional
                        </h3>
                    </div>

                    {/* Panel 2: Egresados en todo el mundo */}
                    <div className="h-full flex flex-col justify-center rounded-2xl min-[1700px]:rounded-[35px] py-3 lg:py-6 min-[1700px]:py-20 px-1 text-center shadow-lg" style={{ backgroundColor: '#001A70' }}>
                        <div className="py-3">
                            <span className="text-5xl min-[470px]:text-6xl lg:text-7xl min-[1700px]:text-[170px] font-lemon-bold leading-5" style={{ color: '#FFA400' }}>+100K</span>
                        </div>
                        <p className="text-white text-lg lg:text-2xl min-[1700px]:text-6xl font-eastman-bold leading-5">
                            Egresados en <br /> todo el mundo
                        </p>
                    </div>

                    {/* Panel 3: Profesores certificados CELTA */}
                    <div className="rounded-2xl h-full flex flex-col justify-center min-[1700px]:rounded-[35px] py-3 lg:py-6 px-1 text-center shadow-lg" style={{ backgroundColor: '#001A70' }}>
                        <div className="py-3">
                            <span className="text-6xl lg:text-8xl min-[1700px]:text-[200px] font-lemon-bold leading-5" style={{ color: '#FFA400' }}>100</span>
                        </div>
                        <p className="text-white text-lg lg:text-2xl min-[1700px]:text-6xl font-eastman-bold leading-5">
                            Profesores <br /> certificados CELTA
                        </p>
                    </div>

                    {/* Panel 4: Clases totalmente en inglés */}
                    <div className="bg-white rounded-2xl min-[1700px]:rounded-[35px] py-3 lg:py-6 px-1 text-center shadow-lg">
                        <div className="mb-4">
                            <img
                                src="/img/ICONOCLASES.webp"
                                alt="Clases en inglés"
                                className="w-24 lg:w-44 min-[1700px]:w-64 h-auto mx-auto mb-4"
                            />
                        </div>
                        <h3 className="font-eastman-bold text-xl lg:text-2xl min-[1700px]:text-6xl leading-5" style={{ color: '#001A70' }}>
                            Clases totalmente <br />
                            en inglés
                        </h3>
                    </div>
                </div>
            </div>
            <img src="/img/ESTRELLASNUBE.webp" alt="cuadros" className="w-full h-auto absolute -bottom-20 min-[640px]:-bottom-32 lg:-bottom-52 min-[1700px]:-bottom-72 z-20" />
        </section>
    );
};

export default FeaturesGrid;
