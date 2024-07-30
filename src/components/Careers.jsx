import { motion } from "framer-motion"
import { slideIn } from "../utils/motion"

const Careers = () => {
    return (
        <>
            <div 
                className="" 
                id="careers"
            />
            <section className="relative z-20 mt-[80px] xl:mt-[150px]">
                <div className="bg-primary-default mx-10 sm:mx-20 py-[80px] p-10 rounded-[70px]">
                    <motion.div 
                        className="flex flex-col justify-center items-center gap-4 text-center"
                        variants={slideIn("up", "tween", 0.35, 1, false)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, amount: 0.10}}
                    >
                        <h2 className="mb-4 w-[300px] sm:w-[400px] lg:w-fit text-white h2">
                            Want To Start A Career at VIVA?
                        </h2>
                        <p className="mx-auto mb-8 max-w-[640px] text-white"> 
                            Whether you're looking to advance your career or start a new chapter, 
                            we offer a dynamic environment where your talents can thrive. Join our 
                            team and be part of a company that truly values creativity, collaboration, and 
                            professional development. 
                        </p>
                        <button className="btn btn-accent">
                            Connect With Us <i className="ri-arrow-right-line"></i>
                        </button>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Careers