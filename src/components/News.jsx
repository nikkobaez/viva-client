import { motion } from "framer-motion"
import { slideIn, staggerContainer } from "../utils/motion"
import { articles } from "../constants"
import { NewsKitchen1, NewsKitchen2, NewsKitchen3 } from "../assets"

const News = () => {
    return (
        <>
            <div 
                className="" 
                id="news"
            />
            <section className="relative z-20 mt-[80px] xl:mt-[150px]">
                <motion.div 
                    className="mx-auto px-10 sm:px-20"
                    variants={staggerContainer()} 
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.10}}
                >
                    <motion.div 
                        className="mx-auto mb-[52px] text-center"
                        variants={slideIn("up", "tween", 0.35, 1, true)} 
                    >
                        <h2 className="h2">
                            Articles & News
                        </h2>
                    </motion.div>
                    <motion.div 
                        className="gap-[27px] grid grid-cols-1 xl:grid-cols-3"
                        variants={slideIn("up", "tween", 0.35, 1, true)} 
                    > 
                        {articles.map((article) => (
                            <div key={article.key} className="border-primary-default/20 hover:bg-accent-secondary mx-auto xl:mx-0 p-[20px] border rounded-[62px] w-full max-w-[382px] h-[520px] transition-all cursor-pointer group"> 
                                <img src={article.image} alt="news image"/>
                                <div className="flex flex-col gap-[20px]">
                                    <h3 className="h3">
                                        {article.title}
                                    </h3>
                                    <div className="flex justify-between items-center">
                                        <p className="text-base"> 
                                            {article.date}
                                        </p>
                                        <button className="group-hover:bg-white bg-accent-secondary rounded-full w-[45px] h-[45px] transition-all"> 
                                            <i className="ri-arrow-right-s-line pl-1 text-3xl text-primary"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>
        </>
    )
}

export default News