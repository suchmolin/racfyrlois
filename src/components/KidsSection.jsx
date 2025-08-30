import React from 'react';
import KidsCard from './KidsCard';

const KidsSection = () => {
    return (
        <section className="pt-16 bg-white rounded-b-[40%]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#001A70' }}>
                    Programas para Niños
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Kids 3-5 años - Default colors */}
                    <KidsCard
                        imagePath="/img/NINOKIDS.png"
                        backgroundColor="#001A70"
                        titleColor="#97D700"
                        subtitle="3-5 años"
                        title="Kids"
                        titleSize='60px'
                        imgWidth='350px'
                        imgAlt="/img/CONTROL.png"
                    />

                    {/* Kids 6-8 años - Custom colors */}
                    <KidsCard
                        imagePath="/img/NINOCON FORMAS.png"
                        backgroundColor="#97D700"
                        titleColor="#FFA400"
                        titleSize="30px"
                        subtitle="6-11 años"
                        title="Elementary"
                        imgWidth='400px'
                        imgAlt="/img/LENTES-3.png"
                    />

                    {/* Kids 9-12 años - Another custom color */}
                    <KidsCard
                        imagePath="/img/SCHOOLNINA.png"
                        backgroundColor="#FFA400"
                        titleColor="#FFA400"
                        titleSize="30px"
                        subtitle="12-16 años"
                        title="High School"
                        imgWidth='370px'
                        imgAlt="/img/flor.png"
                    />
                </div>
            </div>
            <div className='bg-[#001A70] -mt-20'>
                <div className='bg-white rounded-b-[20%] w-full h-32'></div>
            </div>
        </section>
    );
};

export default KidsSection;
