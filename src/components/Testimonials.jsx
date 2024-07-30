import { motion } from "framer-motion"
import { slideIn, staggerContainer } from "../utils/motion"
import { breakpoints, testimonials } from "../constants"
import { Fragment } from "react"

const Testimonials = () => {
    return (
        <>
            <div 
                id="testimonials"
                className="my-12" 
            />
            <section className="relative z-20 mt-[80px] xl:mt-[200px] testimonial">
                {/* TESTIMONIALS CONTAINER */}
                <div className="bg-accent-secondary mx-10 sm:mx-20 p-8 sm:p-10 rounded-[70px]">
                    <motion.div 
                        variants={staggerContainer()}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, amount: 0.10}}
                        className="flex flex-col items-center"
                    >
                        <motion.h2 
                            id="testimonials" 
                            className="mb-[52px] w-[250px] sm:w-[350px] lg:w-fit text-center h2"
                            variants={slideIn("up", "tween", 0.35, 1, true)} 
                        >
                            What People Think About Us
                        </motion.h2>

                        {/* TESTIMONIALS SLIDER */}
                        <motion.div 
                            className="w-full h-fit"
                            variants={slideIn("up", "tween", 0.35, 1, true)} 
                        >
                            {/* SWIPER CONTAINER */}
                            <swiper-container style={{"--swiper-pagination-color": "#CDA274"}} breakpoints={JSON.stringify(breakpoints)} pagination="true">
                                {/* SWIPER SLIDES */}
                                    {/* SLIDE DATA */}
                                    {testimonials.map((testimonial) => (
                                        <Fragment key={testimonial.id}>
                                            <swiper-slide>
                                                {/* SLIDE DATA */}
                                                <div className="flex flex-col justify-center bg-white mb-16 p-5 sm:p-9 rounded-[30px] w-full h-[400px] sm:h-[340px]">
                                                    <div className="flex sm:flex-row flex-col items-center gap-4 mb-6">
                                                        <img src={testimonial.profile} alt="testimonial image"/>
                                                        <div className="flex flex-col justify-center items-center sm:items-start">
                                                            <h3> {testimonial.author} </h3>
                                                            <p> {testimonial.location} </p>
                                                        </div>
                                                    </div>
                                                    <p className="text-center sm:text-left">
                                                        {testimonial.review}
                                                    </p>
                                                </div>
                                            </swiper-slide>
                                        </Fragment>
                                    ))}
                            </swiper-container>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
         </>
    )
}

export default Testimonials