import React, { useState } from "react";
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

const Minus = ({ onClick, color }) => {
    const [pathColor, setPathColor] = useState(color);

    const changeColor = () => {
        setPathColor(pathColor === color ? `rgb(0,0,0)` : color);
    }

    return <motion.svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" variants={variants} initial="hidden" animate="visible" whileHover={{ scale: 1.3 }} onTap={changeColor} whileTap={{ scale: 0.7 }} onClick={onClick}>
        <motion.path d="M 6.531 49.875 C 5.22 49.875 4.156 48.812 4.156 47.5 L 4.156 28.5 C 4.156 27.188 5.22 26.125 6.531 26.125 L 67.094 26.125 C 68.405 26.125 69.469 27.188 69.469 28.5 L 69.469 47.5 C 69.469 48.812 68.405 49.875 67.094 49.875 Z" fill={pathColor} variants={pathVariants} />
    </motion.svg>
}

export default Minus;