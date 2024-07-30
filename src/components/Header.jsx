import { useRef } from "react"
import { Logo } from "../assets"

const Header = () => {
    const navMenuRef = useRef(null)

    return (
        <>
            {/* HEADER */}
            <header className='top-0 left-0 z-50 fixed bg-white shadow-sm lg:shadow-xl w-full'>
                {/* NAV CONTAINER */}
                <nav className='relative flex justify-between items-center px-10 sm:px-20 h-[90px]'>
                    {/* LOGO */}
                    <a href="#" className="flex items-center gap-4">
                        <img 
                            src={Logo}
                            alt="logo image"
                            className="w-7 object-contain"
                        />
                        <h1 className="text-[28px]">
                            VIVA
                        </h1>
                    </a>
                    
                    {/* DESKTOP NAV MENU */}
                    <div className="lg:flex hidden">
                        <ul className="flex items-center gap-10">
                            <li>
                                <a href="#home">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials">
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a href="#news">
                                    News
                                </a>
                            </li>
                            <li>
                                <a href="#careers">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* MOBILE NAV MENU TOGGLE BUTTON */}
                    <div onClick={() => navMenuRef.current.classList.toggle("nav-is-open")} className="lg:hidden cursor-pointer">
                        <i className="text-4xl text-primary-default ri-menu-4-line" />
                    </div>
                </nav>
            </header>

            {/* MOBILE NAV MENU */}
            <div ref={navMenuRef} className="top-[-100%] z-40 fixed flex justify-center items-center lg:hidden bg-white shadow-xl p-6 border-t w-full transition-all duration-500">
                <ul className="flex flex-col items-center gap-10">
                    <li>
                        <a href="#home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#testimonials">
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a href="#news">
                            News
                        </a>
                    </li>
                    <li>
                        <a href="#careers">
                            Careers 
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header