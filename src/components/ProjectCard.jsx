import { motion } from "framer-motion"

function ProjectCard({ title, description }) {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05, rotate: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  )
}

export default ProjectCard