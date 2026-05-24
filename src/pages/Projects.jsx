import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import ProjectCard from "../components/ProjectCard"

function Projects() {
  return (
    <motion.div className="page" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
      <Link to="/" className="back-button">← BACK</Link>
      <h1>PROJECTS</h1>

      <div className="projects-grid">
        <ProjectCard
          title="Pallet Pal Robot"
          description="Autonomous robotic system for detecting, transporting, and sorting containers by color."
        />

        <ProjectCard
          title="Computer Vision Tracking"
          description="HSV filtering project for detecting colored objects using camera input."
        />

        <ProjectCard
          title="Embedded Systems Labs"
          description="Microcontroller projects using timers, PWM, GPIO, ADC, and sensors."
        />
      </div>
    </motion.div>
  )
}

export default Projects