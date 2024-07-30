import { motion } from "framer-motion"
import { slideIn } from "../utils/motion"
import { AboutKitchen } from "../assets"

const About = () => {
    return (
        <section id="about" className="relative z-20 mt-[80px] xl:mt-[200px] about">
            {/* ABOUT CONTAINER */}
            <div className="mx-auto px-10 sm:px-20">
                {/* ABOUT DATA */}
                <div className="flex xl:flex-row flex-col justify-between items-center gap-8 xl:gap-[74px] text-center xl:text-left">
                    <motion.div 
                        variants={slideIn("left", "tween", 0.35, 1, false)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, amount: 0.10}}
                        className="flex flex-col flex-1 items-center xl:items-start gap-8 order-2 xl:order-none max-w-[410px]"
                    > 
                        <h2 className="h2">
                            We Create The Art 
                            <br />
                            Of Living Stylishly
                        </h2>
                        <p>
                            We take pride in using only the finest materials and employing skilled craftmanship
                            to bring your designs to life. Our commitment to quality ensures that every piece is 
                            not only asthetically pleasing but also built to last as we understand that the true value 
                            of furniture lies in its ability to enhance your home for years.
                        </p>
                        
                        <button className="mx-auto xl:mx-0 btn btn-primary">
                            Read more <i className="ri-arrow-right-line text-[25px] text-accent-default"></i>
                        </button>
                    </motion.div>

                    <motion.div 
                        variants={slideIn("right", "tween", 0.35, 1, false)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, amount: 0.10}}
                        className="order-1 xl:order-none mx-auto xl:mx-0 max-w-[453px] xl:max-w-none about__img"
                    >
                        <img src={AboutKitchen} alt="about image"/>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About