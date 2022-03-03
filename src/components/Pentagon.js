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

const Pentagon = ({ onClick, color }) => {
    const [pathColor, setPathColor] = useState(color);

    const changeColor = () => {
        setPathColor(pathColor === color ? `rgb(0,0,0)` : color);
    }

    return <motion.svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" variants={variants} initial="hidden" animate="visible" whileHover={{ scale: 1.3 }} onTap={changeColor} whileTap={{ scale: 0.7 }} onClick={onClick}>
        <motion.path d="M 35.567 0.478 C 36.422 -0.142 37.578 -0.142 38.433 0.478 L 72.658 25.345 C 73.513 25.965 73.87 27.066 73.544 28.07 L 60.471 68.305 C 60.145 69.309 59.209 69.989 58.153 69.989 L 15.847 69.989 C 14.791 69.989 13.855 69.309 13.529 68.305 L 0.456 28.07 C 0.13 27.066 0.487 25.965 1.342 25.345 Z" fill={pathColor} variants={pathVariants} />
    </motion.svg>
}

export default Pentagon;