import ContactForm from "./ContactForm";
import { LiaFacebookSquare } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function Formulario() {
    return (
        <div className="w-full flex flex-col items-center bg-[#001A70] pb-5 relative z-10">
            <img src="/img/cincoestrellas.png" alt="5 estrellas" />
            <h2 className="italic my-2 text-white text-3xl font-bold text-center text-nowrap">
                ¡Impulsa el aprendizaje <br />
                de tu hijo con el inglés!
            </h2>

            <ContactForm />

            <div id="redes" className="flex gap-2 items-center text-white text-4xl ">
                <a href="#"><LiaFacebookSquare /></a>
                <a href="#"><FaInstagram className="text-3xl" /></a>
                <a href="#"><AiOutlineLinkedin /></a>
            </div>

        </div>
    )
}