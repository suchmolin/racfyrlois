import React from 'react';
import KidsCard from './KidsCard';

const KidsSection = () => {
    return (
        <section className="pt-16 bg-white rounded-b-[40%]">
            <div className="mx-auto">
                <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 min-[1960px]:gap-2 ">
                    {/* Kids 3-5 años - Default colors */}
                    <KidsCard
                        imagePath="/img/NINOKIDS.png"
                        backgroundColor="#001A70"
                        titleColor="#97D700"
                        subtitle="3-5 años"
                        title="Kids"
                        titleSize='text-[60px] xl:text-[75px] min-[1610px]:text-[85px] leading-[60px] xl:leading-[75px]'
                        imgWidth='w-[350px] xl:w-[460px]'
                        imgAlt="/img/CONTROL.png"
                        href="#kids"
                    />

                    {/* Kids 6-8 años - Custom colors */}
                    <KidsCard
                        imagePath="/img/NINOCON FORMAS.png"
                        backgroundColor="#97D700"
                        titleColor="#FFA400"
                        titleSize="text-[30px] xl:text-[45px] min-[1610px]:text-[55px] leading-[30px] xl:leading-[45px]"
                        subtitle="6-11 años"
                        title="Elementary"
                        imgWidth='w-[400px] lg:w-[500px] xl:w-[600px]'
                        imgAlt="/img/LENTES-3.png"
                        href="#elementary"
                    />

                    {/* Kids 9-12 años - Another custom color */}
                    <KidsCard
                        imagePath="/img/SCHOOLNINA.png"
                        backgroundColor="#FFA400"
                        titleColor="#FFA400"
                        titleSize="text-[30px] xl:text-[45px] min-[1610px]:text-[55px] leading-[30px] xl:leading-[45px]"
                        subtitle="12-16 años"
                        title="High School"
                        imgWidth='w-[370px] xl:w-[600px]'
                        imgAlt="/img/lapiz.png"
                        href="#highschool"
                        imgAltClass="-bottom-10 -right-5 w-[110px]"
                    />
                </div>
            </div>
            <div className='bg-[#001A70] relative'>
                <div className='bg-white rounded-b-[30px] w-full h-32 -mt-4'></div>
                <div className='w-full h-20 absolute -top-1 bg-white'></div>
            </div>
        </section>
    );
};

export default KidsSection;
