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

const Plus = ({ onClick, color }) => {
    return <motion.svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" variants={variants} initial="hidden" animate="visible" whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.7 }} onClick={onClick}>
        <motion.path d="M 24.938 7.719 C 24.938 6.407 26.001 5.344 27.313 5.344 L 46.313 5.344 C 47.624 5.344 48.688 6.407 48.688 7.719 L 48.688 26.125 L 67.094 26.125 C 68.405 26.125 69.469 27.188 69.469 28.5 L 69.469 47.5 C 69.469 48.812 68.405 49.875 67.094 49.875 L 48.688 49.875 L 48.688 68.281 C 48.688 69.593 47.624 70.656 46.313 70.656 L 27.313 70.656 C 26.001 70.656 24.938 69.593 24.938 68.281 L 24.938 49.875 L 6.531 49.875 C 5.22 49.875 4.156 48.812 4.156 47.5 L 4.156 28.5 C 4.156 27.188 5.22 26.125 6.531 26.125 L 24.938 26.125 Z" fill={color} variants={pathVariants} />
    </motion.svg>
}

export default Plus;