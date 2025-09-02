import React from 'react';
import { IoIosPhonePortrait } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { Button, Dropdown, Popover } from "flowbite-react";

const Footer = () => {
    const data = [
        {
            titulo: "Caracas (CCCT)",
            img: "/img/AE/ccctmap.png",
            direccion: "Centro Ciudad Comercial Tamanaco (CCCT), Sector Yarey, lopcal PB 005",
            redir: "https://www.google.com/maps/place/Centro+Ciudad+Comercial+Tamanaco+-+CCCT/@10.4851878,-66.8577643,17z/data=!3m1!4b1!4m6!3m5!1s0x8c2a58562d6be2f7:0x68c1b72d71c1d7d6!8m2!3d10.4851825!4d-66.8551894!16s%2Fg%2F11b60rx05d?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D",
        },
        {
            titulo: "Caracas (UCAB)",
            img: "/img/AE/ucabmap.png",
            direccion: "Ucab Montalbán, módulo 1, piso 5, oficina A1-53.",
            redir: "https://www.google.com/maps/place/Universidad+Cat%C3%B3lica+Andr%C3%A9s+Bello/@10.4648228,-66.9793932,16.25z/data=!4m10!1m2!2m1!1sUCAB!3m6!1s0x8c2a5ff4fca985bf:0x43cb2d8100a63708!8m2!3d10.4641419!4d-66.9764402!15sCgRVQ0FCWgYiBHVjYWKSARJwcml2YXRlX3VuaXZlcnNpdHmaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUnhhSFJZVnpSM1JSQULgAQA!16zL20vMGg3NTN6?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D",
        },
        {
            titulo: "Caracas (Prados del Este)",
            img: "/img/AE/pdemap.png",
            direccion: "Centro Comercial Galerías Prados del Este, Mezzanina, local M2",
            redir: "https://www.google.com/maps/place/Centro+Comercial+Galer%C3%ADas+Prados+del+Este/@10.4492514,-66.8949345,15z/data=!4m10!1m2!2m1!1scentro+comercial+prados+del+este+fyrlois!3m6!1s0x8c2af7986c74cf3f:0x35c3de38e2550b20!8m2!3d10.4496787!4d-66.880684!15sCihjZW50cm8gY29tZXJjaWFsIHByYWRvcyBkZWwgZXN0ZSBmeXJsb2lzWioiKGNlbnRybyBjb21lcmNpYWwgcHJhZG9zIGRlbCBlc3RlIGZ5cmxvaXOSAQ9zaG9wcGluZ19jZW50ZXLgAQA!16s%2Fg%2F11rxnxs923?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D",
        },
        {
            titulo: "Maturín",
            img: "/img/AE/maturinmap.png",
            direccion: "Quinta Fyr Lois, Carrera 4 con calle 1, Sector Campo Obrero.",
            redir: "https://www.google.com/maps/search/Carrera+4,+Con+Calle+1,+Quinta+Fyr+Lois+Nro.+06+Sector+Campo+Obrero+Maturin+Monagas+Zona+Postal+6201./@9.7411928,-63.1777558,14.25z?entry=ttu&g_ep=EgoyMDI1MDEwMi4wIKXMDSoASAFQAw%3D%3D",
        },
        {
            titulo: "Puerto Ordaz",
            img: "/img/AE/pozmap.png",
            direccion: "Centro Comercial Naraya, piso 1, Local 123.",
            redir: "https://www.google.com/maps/search/centro+comercial+nayara+fyrlois/@8.2934764,-62.7311253,17z?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D",
        },
        {
            titulo: "Barquisimeto",
            img: "/img/AE/bqtomap.png",
            direccion: "Av Terepaima, Multicentro Empresarial Crystal Plaza, Torre B, 1er piso, Local 1-B",
            redir: "https://www.google.com/maps/place/Multicentro+Empresarial+Crystal+Plaza/@10.0569426,-69.3060525,15z/data=!4m10!1m2!2m1!1scristal+plaza+barquisimeto+fyrlois!3m6!1s0x8c2a58562d6be2f7:0x68c1b72d71c1d7d6!8m2!3d10.061309!4d-69.2842712!15sCiJjcmlzdGFsIHBsYXphIGJhcnF1aXNpbWV0byBmeXJsb2lzWiQiImNyaXN0YWwgcGxhemEgYmFycXVpc2ltZXRvIGZ5cmxvaXOSARdub25fcHJvZml0X29yZ2FuaXphdGlvbpoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VRdGMxOURZWE5uUlJBQuABAA!16s%2Fg%2F11j23_gsgx?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D",
        },
    ];

    const content = (img, direccion) => (
        <div className="w-[250px]">
            <div className="p-1 relative w-[250px] h-[200px]">
                <img src={img} alt="CCCT" />
            </div>
            <p className="p-2">{direccion}</p>
        </div>
    );

    return (
        <footer className="w-full overflow-hidden">
            <div className="flex">
                {/* Left Section - White Background */}
                <div className="w-4/12 bg-white p-8 flex flex-col items-center justify-between">
                    {/* Logo */}
                    <img src="/img/logo.webp" alt="logo fyrlois" className='' />
                    <img src="/img/lapiz.png" alt="lapiz fyrlois" className='-scale-y-100' />

                    {/* Copyright */}
                    <div className="text-gray-600 text-[8px] text-center text-nowrap">
                        © 2025 Fyr lois. All Right Reserved.
                    </div>
                </div>

                {/* Right Section - Orange Background */}
                <div className="w-8/12 bg-[#FFA400] py-8 px-8 ">
                    <div className="grid grid-cols-2  -ml-3">
                        {/* Navegación */}
                        <div>
                            <h3 className="text-sm font-bold text-[#001A70] mb-2">
                                Navegación
                            </h3>
                            <ul className="">
                                {['Inicio', 'Conócenos', 'Etapas', 'Horarios', 'Contáctanos'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-1  text-[10px]">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <a href="#" className="w-[120px] text-[#001A70] hover:underline">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contáctanos */}
                        <div>
                            <h3 className="text-sm font-bold text-[#001A70] mb-2">
                                Contáctanos
                            </h3>
                            <div className="space-y-3">
                                {/* Phone */}
                                <div className="flex items-center  text-[10px] text-nowrap">
                                    <div className='w-[50px]'>
                                        <IoIosPhonePortrait className='text-white text-sm' />
                                    </div>
                                    <span className="text-[#001A70]">
                                        0212 959 3681 CCCT
                                    </span>
                                </div>

                                {/* Location */}
                                <div className="flex items-start  text-[10px] text-nowrap gap-1">
                                    <div className='w-[50px]'>
                                        <FiMapPin className='text-white text-sm' />
                                    </div>
                                    <span className="text-[#001A70] text-[10px]">
                                        (CCCT), nivel C2, Sector Yarey, <br />
                                        local PB 05.
                                    </span>
                                </div>

                                {/* SEDES Button */}
                                <div className="bg-gray-200 w-fit py-2 px-4 rounded-md hover:font-bold transition-all duration-300">
                                    <Dropdown inline label="Sedes" dismissOnClick={false} className='text-[#001A70]'>
                                        {data.map((item, i) => (
                                            <Dropdown.Item
                                                onClick={() => window.open(item.redir, "_blank")}
                                                key={i}
                                                className="p-0"
                                            >
                                                <Popover
                                                    content={content(item.img, item.direccion)}
                                                    trigger="hover"
                                                    placement="top"
                                                >
                                                    <Button
                                                        color="light"
                                                        className="border-none bg-transparent w-full h-full"
                                                    >
                                                        {item.titulo}
                                                    </Button>
                                                </Popover>
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;