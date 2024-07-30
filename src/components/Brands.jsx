import { motion } from "framer-motion"
import { slideIn } from "../utils/motion"
import { BrandsLogo1, BrandsLogo2, BrandsLogo3, BrandsLogo4, BrandsLogo5 } from "../assets"

const Brands = () => {
    return (
        <section id="brands" className="relative z-20 mt-[80px] xl:mt-[200px]">
            {/* BRANDS CONTAINER */}
            <motion.div 
                variants={slideIn("up", "tween", 0.35, 1, false)}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount: 0.10}}
                className="mx-auto px-10 sm:px-20"
            >
                <div className="flex xl:flex-row flex-col justify-between items-center gap-12">
                    <img src={BrandsLogo1} alt="brands image"/>
                    <img src={BrandsLogo2} alt="brands image"/>
                    <img src={BrandsLogo3} alt="brands image"/>
                    <img src={BrandsLogo4} alt="brands image"/>
                    <img src={BrandsLogo5} alt="brands image"/>
                </div>
            </motion.div>
        </section>
    )
}

export default Brands