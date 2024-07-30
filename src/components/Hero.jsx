import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { slideIn } from "../utils/motion"

const Hero = () => {
    const navigate = useNavigate()

    return (
        <section id="home" className='relative z-30 bg-home lg:bg-cover bg-no-repeat bg-center bg-fixed xl:rounded-bl-[300px] h-[640px] xl:h-[840px]'>
            <div className='flex justify-center xl:justify-start items-center mx-auto px-10 md:pl-20 h-full'>   
                <motion.div 
                    variants={slideIn("down", "tween", 0.35, 1, false)} 
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.10}}
                    className='flex flex-col items-center lg:items-start w-[567px] text-center xl:text-left hero__text'
                > 
                    <h1 className='mb-8 h1'>
                        Transform Your Space 
                        <br />
                        With Custom Furniture
                    </h1>
                    <p className='mb-8 w-[350px] sm:w-full'>
                        Explore our diverse collection and create pieces that bring your vision to life and perfectly 
                        match your style with our user friendly 3D design tool
                    </p>
                    <button onClick={() => navigate("/studio")} className='mx-auto xl:mx-0 btn btn-primary'>
                        Create your piece <i className="ri-arrow-right-line text-[25px] text-accent-default"></i>
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero