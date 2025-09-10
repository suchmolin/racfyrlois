export default function SomosUnaEmpresa() {
    return (
        <div className="w-full flex flex-col items-center bg-white pt-10 pb-[270px] min-[400px]:pb-[350px] min-[540px]:pb-[450px] min-[650px]:pb-[550px]  min-[800px]:pb-[650px] min-[935px]:pb-[750px] min-[1065px]:pb-[850px] min-[1185px]:pb-[950px] min-[1300px]:pb-[1050px] min-[1460px]:pb-[1150px] min-[1590px]:pb-[1250px] min-[1720px]:pb-[1350px] min-[1850px]:pb-[1450px]  min-[1980px]:pb-[1550px] relative">
            <div className="w-fit relative">

                <h3 className="text-lg min-[375px]:text-xl min-[510px]:text-2xl min-[650px]:text-4xl min-[800px]:text-5xl min-[1185px]:text-6xl min-[1460px]:text-7xl bg-[#001A70] p-4 text-white text-center rounded-lg relative font-eastman-bold text-nowrap z-10 leading-7">
                    Somos una empresa global <br />
                    con <span className="font-lemon text-[#97D700]">26</span><span className="text-[#97D700]"> años de experiencia</span><br />
                    enseñando idiomas alrededor<br />
                    del mundo.
                </h3>
                <div className="w-[140px] min-[800px]:w-[240px] min-[1185px]:w-[340px] h-[100px] rounded-lg -rotate-[22deg] absolute -bottom-5 right-10 bg-[#001A70]"></div>
            </div>
            <img src="/img/VERDERAYO.webp" alt="personaje verde con rayos" className="w-full h-auto absolute -bottom-10 z-20" />
        </div>
    )
}