import ContactForm from "./ContactForm";
import { LiaFacebookSquare } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function Formulario() {
    return (
        <div id="contactanos" className="w-full flex flex-col items-center bg-[#001A70] pb-5 relative z-10">
            <div className="w-full flex justify-center py-10">

                <img src="/img/cincoestrellas.webp" alt="5 estrellas" className="w-[330px] lg:w-[500px] 2xl:w-[900px]" />
            </div>
            <h2 className="italic my-2 text-white text-2xl lg:text-6xl 2xl:text-8xl font-eastman-bold text-center text-nowrap">
                ¡Impulsa el aprendizaje <br />
                de tu hijo con el inglés!
            </h2>

            <ContactForm />

            <div id="redes" className="flex gap-2 items-center text-white text-4xl lg:text-6xl  2xl:text-8xl">
                <a href="https://www.facebook.com/fyrlois.oficial"><LiaFacebookSquare /></a>
                <a href="https://www.instagram.com/fyrlois"><FaInstagram className="text-3xl lg:text-5xl 2xl:text-7xl" /></a>
                <a href="https://www.linkedin.com/company/fyr-lois-language-institute"><AiOutlineLinkedin /></a>
            </div>

        </div>
    )
}