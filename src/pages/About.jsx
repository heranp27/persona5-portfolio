import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function About() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="back-button">← BACK</Link>
      <h1>ABOUT ME</h1>
      <p>I am Heran Patel, building a Persona 5 inspired portfolio.</p>
    </motion.div>
  )
}

export default About