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

const Parallelogram = ({ onClick, color }) => {
    return <motion.svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" variants={variants} initial="hidden" animate="visible" whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.7 }} onClick={onClick}>
        <motion.path d="M 12.075 11.391 C 12.304 10.289 13.275 9.5 14.4 9.5 L 72.486 9.5 C 73.992 9.5 75.118 10.885 74.811 12.359 L 63.925 64.609 C 63.696 65.711 62.725 66.5 61.6 66.5 L 3.514 66.5 C 2.008 66.5 0.882 65.115 1.189 63.64 Z" fill={color} variants={pathVariants} />
    </motion.svg>
}

export default Parallelogram;