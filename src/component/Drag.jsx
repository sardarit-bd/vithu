"use client"

import { motion, useSpring } from "framer-motion"
import { useEffect } from "react"

export default function Drag() {
    const x = useSpring(0, spring)
    const y = useSpring(0, spring)

    useEffect(() => {
        const handlePointerMove = (e) => {
            x.set(e.clientX)
            y.set(e.clientY)
        }

        window.addEventListener("pointermove", handlePointerMove)

        return () => {
            window.removeEventListener("pointermove", handlePointerMove)
        }
    }, [x, y])

    return (
        <motion.div
            style={{
                ...ball,
                translateX: x,
                translateY: y,
            }}
        >
            <div style={smallball} />
        </motion.div>
    )
}

const spring = {
    stiffness: 100,
    damping: 30,
}

/* styles */
const ball = {
    width: 30,
    height: 30,
    border: "1px solid Red",
    borderRadius: "50%",
    position: "fixed",
    background: "transparent",
    left: 0,
    top: 0,
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
}

const smallball = {
    width: 7,
    height: 7,
    background: "Red",
    borderRadius: "50%",
    position: "absolute",
    left: 0,
    top: 0,
    pointerEvents: "none",
    transform: "translate(145%, 160%)",
}