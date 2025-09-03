

import { FaCheckCircle } from "react-icons/fa"

export default function SendedMsg() {

  return (
    <div className="fixed w-full bottom-20 sm:bottom-10 left-0 h-[80px] flex justify-center items-center">

      <div className="px-10 py-4 bg-gray-50 rounded-xl flex gap-3 items-center">
        <FaCheckCircle className="text-[#cdea80] text-base sm:text-xl" />
        <p className="text-base sm:text-xl">Su mensaje ha sido enviado correctamente</p>
      </div>

    </div>
  )
}
