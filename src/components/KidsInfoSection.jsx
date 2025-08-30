import React from 'react';
import KidsInfoCard from './KidsInfoCard';

const KidsInfoSection = () => {
    const kidsData = [
        {
            title: "Kids",
            subtitle: "3 a 5 años",
            items: [
                "Implementamos una metodología divertida, diseñada para los más pequeños.",
                "Aprovecha la plasticidad de su cerebro para aprender el idioma.",
                "Amplía su conocimiento del mundo, cultura y tolerancia.",
                "Logra una pronunciación más precisa del inglés desde temprana edad."
            ],
            imgtitulo: "/img/ESTRELLA1.webp"

        },
        {
            title: "Elementary",
            subtitle: "6 a 11 años",
            items: [
                "Mejora su rendimiento académico del colegio.",
                "Desarrolla su capacidad para adaptarse a nuevos entornos y situaciones.",
                "Potencia sus habilidades comunicativas, fomenta su comprensión y empatía hacia diferentes culturas.",
                "Fortalece su confianza al expresarse, lo que impacta positivamente en su autoestima."
            ],

            bgcolor: "white",
            textcolor: "#001A70",
            imgtitulo: "/img/LENTES-3.png",
            titlesize: "45px"
        },
        {
            title: "High School",
            subtitle: "12 a 16 años",
            items: [
                "Potencia sus oportunidades de becas y estudios en el extranjero.",
                "Metodología práctica y estimulante, especial para que se mantenga motivado hasta dominar el inglés.",
                "Utilizamos temas pensados para su edad e intereses.",
                "Brindamos una preparación para pruebas académicas: TOEFL y IELTS."
            ],
            imgtitulo: "/img/LENTES-3.png",
            titlesize: "43px"

        }
    ];

    return (
        <section className="">
            <div className="">
                {kidsData.map((data, index) => (
                    <KidsInfoCard
                        key={index}
                        title={data.title}
                        subtitle={data.subtitle}
                        items={data.items}
                        imgtitulo={data.imgtitulo}
                        bgcolor={data.bgcolor}
                        textcolor={data.textcolor}
                        titlesize={data.titlesize}
                    />
                ))}
            </div>
        </section>
    );
};

export default KidsInfoSection;
