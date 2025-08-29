import { useState } from 'react'
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    const menuItems = [
        { name: 'INICIO', href: '#inicio' },
        { name: 'HORARIOS', href: '#horarios' },
        { name: 'ETAPAS', href: '#etapas' },
        { name: 'CONTACTANOS', href: '#contactanos' }
    ]

    return (
        <nav className="shadow-lg eastman font-bold" style={{ backgroundColor: '#97D700' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Lado izquierdo - vacío */}
                    <div className="flex-shrink-0">
                        {/* Espacio vacío para mantener el layout */}
                    </div>

                    {/* Iconos - Lado derecho */}
                    <div className="flex items-center space-x-4">
                        {/* Icono del carrito de compras */}
                        <button className="text-white hover:opacity-80 transition-opacity duration-200 p-2">
                            <IoCartOutline className='text-3xl' />
                        </button>

                        {/* Icono del menú hamburguesa */}
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:opacity-80 transition-opacity duration-200 p-2 md:hidden"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Abrir menú principal</span>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>

                        {/* Menú desktop - solo visible en md y superior */}
                        <div className="hidden md:flex items-center space-x-6">
                            {menuItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-white hover:opacity-80 px-3 py-2 text-sm  transition-opacity duration-200"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Menú móvil - solo visible en pantallas pequeñas */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`} style={{ backgroundColor: '#97D700' }}>
                <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white border-opacity-20">
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={closeMenu}
                            className="text-white hover:opacity-80 block px-3 py-2 rounded-md text-base  transition-opacity duration-200"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
