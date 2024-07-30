import { motion } from "framer-motion"
import { slideIn, staggerContainer } from "../utils/motion"

const Steps = () => {
    return (
        <section id="steps" className="relative z-20 mt-[80px] xl:mt-[200px] steps">
            <div className="mx-auto px-10 sm:px-20">
                {/* GRID */}
                <motion.div 
                    variants={staggerContainer()}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.10}}
                    className="gap-12 grid grid-cols-1 xl:grid-cols-3"
                >
                    <motion.div 
                        className="text-center steps__step"
                        variants={slideIn("up", "tween", 0.25, 1, true)}
                    > 
                        <div className="mb-4">
                            <i className="text-5xl text-accent-default ri-compasses-2-line"></i>
                        </div>
                        <h3 className="mb-5 h3">
                            Real Time 3D Preview
                        </h3>
                        <p className="mx-auto mb-5 max-w-md">
                            Experience your custom furniture like never before with our
                            advanced 3D modeling tool.
                        </p>
                        <div>
                            
                        </div>
                        <a href="#" className="flex justify-center gap-2 font-medium">
                            Read more <i className="ri-arrow-right-line text-accent-default"></i>
                        </a>
                    </motion.div>

                    <motion.div 
                        className="text-center steps__step"
                        variants={slideIn("up", "tween", 0.25, 1, true)}
                    > 
                        <div className="mb-4">
                            <i className="text-5xl text-accent-default ri-palette-line"></i>
                        </div>
                        <h3 className="mb-5 h3">
                            Customize Every Detail
                        </h3>
                        <p className="mx-auto mb-5 max-w-md">
                            With our 3D modeling tool you'll be able to adjust a piece's styles
                            to match your needs

                        </p>
                        <div>
                            
                        </div>
                        <a href="#" className="flex justify-center gap-2 font-medium">
                            Read more <i className="ri-arrow-right-line text-accent-default"></i>
                        </a>
                    </motion.div>

                    <motion.div 
                        className="text-center steps__step"
                        variants={slideIn("up", "tween", 0.25, 1, true)}
                    > 
                        <div className="mb-4">
                            <i className="text-5xl text-accent-default ri-magic-line"></i>
                        </div>
                        <h3 className="mb-5 h3">
                            Seamless Checkout
                        </h3>
                        <p className="mx-auto mb-5 max-w-md">
                            Ready to bring your vision to life? Go to checkout here on our
                            website or call us. 
                        </p>
                        <div>
                            
                        </div>
                        <a href="#" className="flex justify-center gap-2 font-medium">
                            Read more <i className="ri-arrow-right-line text-accent-default"></i>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Steps