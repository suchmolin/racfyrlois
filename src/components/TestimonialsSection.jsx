import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Daniris Lopez",
            category: "(Kids)",
            testimonial: "Tengo una opinión muy bonita de Fyr Lois. Me parecen maravillosos todos los profesores, la atención es excelente y el curso es súper completo. Particularmente amo la paciencia de todos los profesores y a mis hijos, que están aquí, les encanta venir. Ellos aman Fyr Lois.",
            imagePath: "/img/Capa-22.jpg"
        },
        {
            name: "Jose Zerpa",
            category: "(Elementary)",
            testimonial: "Este curso de inglés, me parece muy bueno, para todas las edades, tanto para adultos como para niños. Para los niños tiene un toque especial. Es un curso familiar que fomenta su confianza, no les da ese miedo, que usualmente tienen al aprender un nuevo idioma. Realmente en Fyr Lois ellos aprenden jugando.",
            imagePath: "/img/Capa-1.jpg"
        },
        {
            name: "Zulay Araque",
            category: "(Elementary)",
            testimonial: "Fyr Lois es excelente, me encanta la metodología de trabajo. Me gusta que los niños aprendan de una manera divertida, dinámica, con juegos, con cantos y canciones. Los docentes siempre están dispuestos a ayudar a los niños con sus dudas y en todo lo que necesiten. Me fascina que siempre hablan 100% en inglés y que los niños van entendiendo de una manera increíble.",
            imagePath: "/img/Capa-21.jpg"
        },
        {
            name: "Yolis Rodríguez",
            category: "(Elementary y High School)",
            testimonial: "Lo que mejor me ha parecido en Fyr Lois es la manera en que imparten el inglés. Lo hacen jugando, de manera divertida, no hacen las clases monótonas. Por ejemplo, mi hija no se adapta tan rápido y aquí ha sido excelente, estoy sumamente agradecida con todos los profesores porque ha sido una experiencia maravillosa.",
            imagePath: "/img/Capa-11.jpg"
        }
    ];

    return (
        <section className="pt-16 pb-32 px-4 bg-white">
            <div className="mx-auto">
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 min-[1850px]:gap-10">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={index + "testimonial"}
                                name={testimonial.name}
                                category={testimonial.category}
                                testimonial={testimonial.testimonial}
                                imagePath={testimonial.imagePath}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
