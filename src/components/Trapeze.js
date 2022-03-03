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

const Trapeze = ({ onClick, color }) => {
    const [pathColor, setPathColor] = useState(color);

    const changeColor = () => {
        setPathColor(pathColor === color ? `rgb(0,0,0)` : color);
    }

    return <motion.svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" variants={variants} initial="hidden" animate="visible" whileHover={{ scale: 1.3 }} onTap={changeColor} whileTap={{ scale: 0.7 }} onClick={onClick}>
        <motion.path d="M 14.394 11.299 C 14.658 10.242 15.609 9.5 16.698 9.5 L 59.302 9.5 C 60.391 9.5 61.342 10.242 61.606 11.299 L 74.668 63.549 C 75.043 65.048 73.909 66.5 72.364 66.5 L 3.636 66.5 C 2.091 66.5 0.957 65.048 1.332 63.549 Z" fill={pathColor} variants={pathVariants} />
    </motion.svg>
}

export default Trapeze;