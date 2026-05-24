import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function Contact() {
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

      <h1>CONTACT</h1>

      <p>
        Email: heranpatel27@gmail.com
      </p>

      <p>
        GitHub: github.com/heranpatel27
      </p>
    </motion.div>
  )
}

export default Contact