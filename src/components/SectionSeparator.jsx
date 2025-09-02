function SectionSeparator() {
    return (
        <div className="relative w-full h-30 bg-white overflow-x-hidde pt-32 block md:hidden">
            {/* Fondo azul oscuro con transición curva */}
            <div className="absolute bottom-0 w-[150%] -left-1/4 h-full bg-[#001A70] rounded-t-[50%]"></div>

            {/* Estrella centrada */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <img
                    src="/img/ESTRELLA1.webp"
                    alt="Estrella decorativa"
                    className="w-24 aspect-square md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain drop-shadow-lg"
                />
            </div>
        </div>
    )
}

export default SectionSeparator
