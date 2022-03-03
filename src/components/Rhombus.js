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
const Rhombus = ({ onClick, color }) => {
    const [pathColor, setPathColor] = useState(color);

    const changeColor = () => {
        setPathColor(pathColor === color ? `rgb(0,0,0)` : color);
    }

    return <motion.svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" variants={variants} initial="hidden" animate="visible" whileHover={{ scale: 1.3 }} onTap={changeColor} whileTap={{ scale: 0.7 }} onClick={onClick}>
        <motion.path d="M 36.277 1.333 C 37.229 0.381 38.771 0.381 39.723 1.333 L 74.667 36.277 C 75.619 37.229 75.619 38.771 74.667 39.723 L 39.723 74.667 C 38.771 75.619 37.229 75.619 36.277 74.667 L 1.333 39.723 C 0.381 38.771 0.381 37.229 1.333 36.277 Z" fill={pathColor} variants={pathVariants} />
    </motion.svg>
}

export default Rhombus;