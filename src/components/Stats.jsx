import { motion } from "framer-motion"
import { slideIn, staggerContainer } from "../utils/motion"

const Stats = () => {
    return (
        <section id="stats" className="relative z-20 bg-accent-secondary mt-[80px] xl:mt-[150px] py-[80px] xl:py-[150px]">
            <div className="mx-auto px-10 sm:px-20">
                <motion.div 
                    variants={staggerContainer()} 
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.10}}
                    className="gap-12 grid grid-cols-1 xl:grid-cols-4"
                >
                    <motion.div 
                        className="xl:border-accent-default xl:border-r text-center"
                        variants={slideIn("up", "tween", 0.35, 1, true)} 
                    >
                        <h3 className="font-primary text-accent-default h1"> 
                            12 
                        </h3>
                        <p> Years of Experience </p>
                    </motion.div>
                    <motion.div 
                        className="xl:border-accent-default xl:border-r text-center"
                        variants={slideIn("up", "tween", 0.35, 1, true)} 
                    >
                        <h3 className="font-primary text-accent-default h1"> 
                            85 
                        </h3>
                        <p> Projects Completed </p>
                    </motion.div>
                    <motion.div 
                        className="xl:border-accent-default xl:border-r text-center"
                        variants={slideIn("up", "tween", 0.35, 1, true)} 
                    >
                        <h3 className="font-primary text-accent-default h1"> 
                            15 
                        </h3>
                        <p> Active Projects </p>
                    </motion.div>
                    <motion.div 
                        className="text-center"
                        variants={slideIn("up", "tween", 0.35, 1, true)} 
                    >
                        <h3 className="font-primary text-accent-default h1"> 
                            95
                        </h3>
                        <p> Happy Customers </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Stats