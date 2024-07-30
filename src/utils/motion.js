const slideIn = (direction, type, delay, duration, child) => {
    const hidden = {
        opacity: 0,
        x: direction === "left" ? "-15%" : direction === "right" ? "15%" : 0,
        y: direction === "up" ? "15%" : direction === "down" ? "-15%" : 0,
    };
    
    const show = {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: duration
        }
    };

    return {
        hidden,
        show: child ? show : { ...show, transition: { type, duration, ease: "easeOut", delay } }
    };
};

const staggerContainer = () => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.40,
            },
        },
    };
}

export {
    slideIn,
    staggerContainer,
}