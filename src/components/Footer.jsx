import { motion } from "framer-motion"
import { slideIn, staggerContainer } from "../utils/motion"
import { Logo } from "../assets"

const Footer = () => {
    return (
        <div className='bg-white mx-auto max-w-[1920px] overflow-hidden'>
            <footer className="relative z-20 mt-[80px] xl:mt-[150px]">
                <div className="px-10 sm:px-20">
                    <motion.div 
                        className="flex xl:flex-row flex-col xl:gap-[100px] xl:mb-[150px]"
                        variants={staggerContainer()}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, amount: 0.10}}
                    >
                        <motion.div 
                            className="mx-auto mb-8 w-full max-w-[375px] text-center xl:text-left"
                            variants={slideIn("up", "tween", 0.35, 1, true)}
                        >
                            <a href="#" className="flex justify-center xl:justify-start items-center gap-4 mb-5">
                                <img src={Logo} alt="logo image"/>
                                <h1 className="text-[28px]">
                                    VIVA
                                </h1>
                            </a>
                            <p className="mb-8">
                                We create the art of living stylishly transforming 
                                your home into your very own art masterpiece.         
                            </p>
                            <ul className="flex justify-center xl:justify-start gap-[54px] text-primary-default">
                                <li>
                                    <a href="https://www.facebook.com"> 
                                        <i className="text-[25px] ri-facebook-fill"> </i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com"> 
                                        <i className="text-[25px] ri-twitter-fill"> </i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com"> 
                                        <i className="text-[25px] ri-linkedin-fill"> </i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com"> 
                                        <i className="ri-instagram-fill text-[25px]"> </i>
                                    </a>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div 
                            className="flex xl:flex-row flex-col flex-1 xl:justify-end gap-12 xl:gap-[100px] text-center xl:text-left"
                            variants={slideIn("up", "tween", 0.35, 1, true)}
                        >
                            <div>
                                <h3 className="mb-3 h3"> 
                                    Pages
                                </h3>
                                <ul className="flex flex-col gap-4">
                                    <li> <a href="#home"> Home </a></li>
                                    <li> <a href="#about"> About </a></li>
                                    <li> <a href="#testimonials"> Testimonials </a></li>
                                    <li> <a href="#news"> News </a></li>
                                    <li> <a href="#careers"> Careers </a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="mb-3 h3"> 
                                    Furniture
                                </h3>
                                <ul className="flex flex-col gap-4">
                                    <li> <a href="#"> Chairs </a></li>
                                    <li> <a href="#"> Tables </a></li>
                                    <li> <a href="#"> Couches </a></li>
                                    <li> <a href="#"> Rugs </a></li>
                                    <li> <a href="#"> Consoles </a></li>
                                </ul>
                            </div>
                            <div className="mx-auto xl:mx-0 max-w-[200px]">
                                <h3 className="mb-3 h3">
                                    Contact
                                </h3>
                                <div className="flex flex-col gap-3">
                                    <p>
                                        1234 Main Street Houston, Texas 77001
                                    </p>
                                    <p> 
                                        (832) 392-2426
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
                <motion.p 
                    variants={slideIn("left", "tween", 0.35, 1, false)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.10}}
                    className="bg-white mt-10 py-10 border-t text-center"
                >
                    &#169; Copyright Nikko Baez. All rights reserved
                </motion.p>
            </footer>
        </div>
    )
}

export default Footer