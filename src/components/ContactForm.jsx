import React, { useState } from 'react';
import { BsFillLightningChargeFill } from 'react-icons/bs';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        ciudad: '',
        email: '',
        sede: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Aquí puedes agregar la lógica para enviar el formulario
    };

    return (
        <div className="w-full flex justify-center py-8">
            <div className="w-[380px]">
                {/* Form Container */}
                <div className="bg-gray-100 rounded-t-3xl rounded-b-2xl p-8 shadow-lg">
                    {/* Title */}
                    <div className=" mb-8">
                        <h2 className="border-b-[3px] border-[#001A70] w-fit text-3xl font-bold text-[#FFA400] mb-1">
                            Contáctanos
                        </h2>

                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-3">
                        {/* Nombre y Apellido */}
                        <div>
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Nombre y Apellido"
                                value={formData.nombre}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001A70] focus:border-transparent"
                                required
                            />
                        </div>

                        {/* Teléfono */}
                        <div>
                            <input
                                type="tel"
                                name="telefono"
                                placeholder="Teléfono"
                                value={formData.telefono}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001A70] focus:border-transparent"
                                required
                            />
                        </div>

                        {/* Ciudad */}
                        <div>
                            <input
                                type="text"
                                name="ciudad"
                                placeholder="Ciudad"
                                value={formData.ciudad}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001A70] focus:border-transparent"
                                required
                            />
                        </div>

                        {/* Correo electrónico */}
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Correo electrónico"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001A70] focus:border-transparent"
                                required
                            />
                        </div>

                        {/* Seleccione la Sede */}
                        <div className="relative">
                            <select
                                name="sede"
                                value={formData.sede}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001A70] focus:border-transparent appearance-none"
                                required
                            >
                                <option value="">Seleccione la Sede</option>
                                <option value="sede1">Sede Principal</option>
                                <option value="sede2">Sede Norte</option>
                                <option value="sede3">Sede Sur</option>
                            </select>
                            {/* Chevron Icon */}
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg className="w-5 h-5 text-[#001A70]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        {/* Mensaje */}
                        <div>
                            <textarea
                                name="mensaje"
                                placeholder="Mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-3 bg-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001A70] focus:border-transparent resize-none"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className='flex justify-center'>

                            <button
                                type="submit"
                                className="w-fit text-2xl font-eastman italic bg-[#001A70] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#001A70]/90 transition-colors duration-200 flex items-center justify-center gap-3"
                            >
                                ENVIAR
                                <BsFillLightningChargeFill className="text-2xl text-[#FFA400]" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
