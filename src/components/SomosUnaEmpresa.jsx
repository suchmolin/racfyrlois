export default function SomosUnaEmpresa() {
    return (
        <div className="w-full flex flex-col items-center bg-white py-10 relative">
            <div className="w-fit relative">

                <h3 className="text-2xl bg-[#001A70] p-4 text-white text-center rounded-lg relative font-bold text-nowrap z-10 leading-7">
                    Somos una empresa global <br />
                    con <span className="font-lemon text-[#97D700]">26</span><span className="text-[#97D700]"> años de experiencia</span><br />
                    enseñando idiomas alrededor<br />
                    del mundo.
                </h3>
                <div className="w-[140px] h-[100px] rounded-lg -rotate-[22deg] absolute -bottom-5 right-10 bg-[#001A70]"></div>
            </div>
        </div>
    )
}