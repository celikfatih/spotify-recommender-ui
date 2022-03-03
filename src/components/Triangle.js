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

const Triangle = ({ onClick, color }) => {
    return <motion.svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" variants={variants} initial="hidden" animate="visible" whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.7 }} onClick={onClick}>
        <motion.path d="M 34.889 1.531 C 35.827 -0.094 38.173 -0.094 39.111 1.531 L 72.886 60.031 C 73.824 61.656 72.651 63.688 70.775 63.688 L 3.225 63.688 C 1.349 63.688 0.176 61.656 1.114 60.031 Z" fill={color} variants={pathVariants} />
    </motion.svg>
}

export default Triangle;