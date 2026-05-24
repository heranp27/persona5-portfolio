import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function Skills() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="back-button">
        ← BACK
      </Link>

      <h1>SKILLS</h1>

      <p>
        React, JavaScript, Robotics, Embedded Systems,
        Computer Vision, CAD Design, and Mechatronics.
      </p>
    </motion.div>
  )
}

export default Skills