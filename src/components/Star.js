import React from "react";
import { motion } from "framer-motion";

const variants = {
    hidden: { rotate: -360 },
    visible: {
        rotate: 0,
        transition: { repeat: Infinity, duration: 3 }
    }
}

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: "easeInOut"
        }
    }
}

const Star = ({ onClick, color }) => {
    return <motion.svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" variants={variants} initial="hidden" animate="visible" whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.7 }} onClick={onClick}>
        <motion.path d="M 35.948 5.898 C 36.864 4.325 39.136 4.325 40.052 5.898 L 49.758 22.562 C 50.094 23.138 50.656 23.547 51.308 23.688 L 70.155 27.769 C 71.934 28.154 72.636 30.316 71.423 31.673 L 58.575 46.053 C 58.13 46.55 57.916 47.211 57.983 47.875 L 59.925 67.061 C 60.108 68.872 58.27 70.207 56.605 69.474 L 38.958 61.697 C 38.347 61.428 37.653 61.428 37.042 61.697 L 19.395 69.474 C 17.73 70.207 15.892 68.872 16.075 67.061 L 18.017 47.875 C 18.084 47.211 17.87 46.55 17.425 46.053 L 4.577 31.673 C 3.364 30.316 4.066 28.154 5.845 27.769 L 24.692 23.688 C 25.344 23.547 25.907 23.138 26.242 22.562 Z" fill={color} variants={pathVariants} />
    </motion.svg>
}

export default Star;
