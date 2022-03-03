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

const Hexagon = ({ onClick, color }) => {
    const [pathColor, setPathColor] = useState(color);

    const changeColor = () => {
        setPathColor(pathColor === color ? `rgb(0,0,0)` : color);
    }

    return <motion.svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" variants={variants} initial="hidden" animate="visible" whileHover={{ scale: 1.3 }} onTap={changeColor} whileTap={{ scale: 0.7 }} onClick={onClick}>
        <motion.path d="M 36.813 0.686 C 37.548 0.261 38.452 0.261 39.188 0.686 L 69.722 18.314 C 70.456 18.739 70.909 19.523 70.909 20.371 L 70.909 55.629 C 70.909 56.478 70.456 57.261 69.722 57.686 L 39.188 75.314 C 38.452 75.739 37.548 75.739 36.813 75.314 L 6.278 57.686 C 5.544 57.261 5.091 56.478 5.091 55.629 L 5.091 20.371 C 5.091 19.523 5.544 18.739 6.278 18.314 Z" fill={pathColor} variants={pathVariants} />
    </motion.svg>
}

export default Hexagon;