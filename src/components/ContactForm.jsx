import React, { useState } from 'react';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import SendedMsg from './SendedMsg';

const ContactForm = () => {

    const [sended, setSended] = useState(false)

    const sendGS = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        data.modality = data.sede !== "online" ? "presencial" : "online"
        document.getElementById("BtnEnviar").disabled = true

        await fetch("https://fyrloiscom.vercel.app/api/fetchOdoo", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
            mode: "no-cors",
            cache: "no-cache",
        })

        document.getElementById("myForm").reset()
        setSended(true)
        document.getElementById("BtnEnviar").disabled = false

        setTimeout(() => {
            setSended(false)
        }, 5000)
    }




    return (
        <div className="w-full flex justify-center py-8">
            <div className="w-[380px] lg:w-[900px] 2xl:w-[1200px]">
                {/* Form Container */}
                <div className="bg-gray-100 rounded-t-3xl rounded-b-2xl p-8 lg:p-16 2xl:p-20 shadow-lg">
                    {/* Title */}
                    <div className=" mb-8 lg:mb-12 2xl:mb-16">
                        <h2 className="border-b-[3px] lg:border-b-[6px] 2xl:border-b-[8px] border-[#001A70] w-fit text-3xl lg:text-7xl 2xl:text-8xl font-eastman-black text-[#FFA400] mb-1">
                            Contáctanos
                        </h2>

                    </div>

                    {/* Form */}
                    <form id="myForm" onSubmit={(e) => sendGS(e)} className="space-y-3 lg:space-y-6 2xl:space-y-8">
                        {/* Nombre y Apellido */}
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre y Apellido"
                                className="w-full px-4 py-3 lg:px-8 lg:py-5 2xl:px-10 2xl:py-6 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001A70] focus:border-transparent border-none text-base lg:text-3xl 2xl:text-4xl"
                                required
                            />
                        </div>

                        {/* Teléfono */}
                        <div>
                            <input
                                type="number"
                                name="phone"
                                placeholder="Teléfono"
                                className="w-full px-4 py-3 lg:px-8 lg:py-5 2xl:px-10 2xl:py-6 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001A70] focus:border-transparent border-none text-base lg:text-3xl 2xl:text-4xl"
                                required
                            />
                        </div>

                        {/* Ciudad */}
                        <div>
                            <input
                                type="text"
                                name="city"
                                placeholder="Ciudad"
                                className="w-full px-4 py-3 lg:px-8 lg:py-5 2xl:px-10 2xl:py-6 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001A70] focus:border-transparent border-none text-base lg:text-3xl 2xl:text-4xl"
                                required
                            />
                        </div>

                        {/* Correo electrónico */}
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Correo electrónico"
                                className="w-full px-4 py-3 lg:px-8 lg:py-5 2xl:px-10 2xl:py-6 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001A70] focus:border-transparent border-none text-base lg:text-3xl 2xl:text-4xl"
                                required
                            />
                        </div>

                        {/* Seleccione la Sede */}
                        <div className="relative">
                            <select
                                name="sede"
                                className="w-full px-4 py-3 lg:px-8 lg:py-5 2xl:px-10 2xl:py-6 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001A70] focus:border-transparent appearance-none border-none text-base lg:text-3xl 2xl:text-4xl"
                                required
                            >
                                <option value="">Seleccione la Sede</option>
                                <option value="FYR LOIS ONLINE">Online</option>
                                <option value="FYR LOIS CCCT">Caracas - CCCT</option>
                                <option value="FYR LOIS UCAB">Caracas - UCAB</option>
                                <option value="FYR LOIS PRADOS">Caracas - Prados del Este</option>
                                <option value="FYR LOIS PZO">Puerto Ordaz</option>
                                <option value="FYR LOIS BQTO">Barquisimeto</option>
                                <option value="FYR LOIS MATURIN">Maturín</option>
                            </select>
                            {/* Chevron Icon */}

                        </div>

                        {/* Mensaje */}
                        <div>
                            <textarea
                                name="description"
                                placeholder="Mensaje"
                                rows="4"
                                className="w-full px-4 py-3 lg:px-8 lg:py-5 2xl:px-10 2xl:py-6 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001A70] focus:border-transparent resize-none border-none text-base lg:text-3xl 2xl:text-4xl"
                                required
                            ></textarea>
                        </div>
                        <input
                            type="hidden"
                            value="Landing Regreso a Clases Fyr Lois"
                            name="social_media"
                        />
                        <input type="hidden" value="Fyr Lois English Institute" name="from" />

                        {/* Submit Button */}
                        <div className='flex justify-center mt-6 lg:mt-10 2xl:mt-12'>

                            <button
                                type="submit"
                                id="BtnEnviar"
                                className="w-fit text-2xl lg:text-6xl 2xl:text-7xl italic bg-[#001A70] text-white font-eastman-bold py-2 px-6 lg:py-4 lg:px-10 2xl:py-5 2xl:px-12 rounded-lg hover:bg-[#001A70]/90 transition-colors duration-200 flex items-center justify-center gap-3"
                            >
                                ENVIAR
                                <BsFillLightningChargeFill className="text-2xl lg:text-6xl 2xl:text-7xl text-[#FFA400]" />
                            </button>
                        </div>
                    </form>
                    {sended && <SendedMsg />}
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
