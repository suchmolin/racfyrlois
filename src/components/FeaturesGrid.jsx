import React from 'react';

const FeaturesGrid = () => {
    return (
        <section className="py-16 px-4 rounded-t-2xl" style={{ backgroundColor: '#97D700' }}>
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 gap-4">
                    {/* Panel 1: Metodología internacional */}
                    <div className="bg-white rounded-2xl py-3 px-1 text-center shadow-lg">
                        <div className="mb-1">
                            <img
                                src="/img/METODOLOGIA.webp"
                                alt="CEFR Common European Framework"
                                className="w-24 h-24 mx-auto"
                            />
                        </div>
                        <h3 className="font-bold text-xl leading-5" style={{ color: '#001A70' }}>
                            Metodología internacional
                        </h3>
                    </div>

                    {/* Panel 2: Egresados en todo el mundo */}
                    <div className="rounded-2xl py-3 px-1 text-center shadow-lg" style={{ backgroundColor: '#001A70' }}>
                        <div className="py-7">
                            <span className="text-5xl min-[470px]:text-6xl font-lemon font-black leading-5" style={{ color: '#FFA400' }}>+100K</span>
                        </div>
                        <p className="text-white text-lg font-bold leading-5">
                            Egresados en <br /> todo el mundo
                        </p>
                    </div>

                    {/* Panel 3: Profesores certificados CELTA */}
                    <div className="rounded-2xl py-3 px-1 text-center shadow-lg" style={{ backgroundColor: '#001A70' }}>
                        <div className="py-8">
                            <span className="text-6xl font-bold leading-5" style={{ color: '#FFA400' }}>100</span>
                        </div>
                        <p className="text-white text-lg font-bold leading-5">
                            Profesores <br /> certificados CELTA
                        </p>
                    </div>

                    {/* Panel 4: Clases totalmente en inglés */}
                    <div className="bg-white rounded-2xl py-3 px-1 text-center shadow-lg">
                        <div className="mb-4">
                            <img
                                src="/img/ICONOCLASES.webp"
                                alt="Clases en inglés"
                                className="w-24 h-24 mx-auto mb-4"
                            />
                        </div>
                        <h3 className="font-bold text-xl leading-5" style={{ color: '#001A70' }}>
                            Clases totalmente en inglés
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
