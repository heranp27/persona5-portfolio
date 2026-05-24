import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"

function Home() {
  const playClick = () => {
  const audio = new Audio("/sounds/click.mp3")
  audio.play()
}
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="red-slash slash-one"></div>
      <div className="red-slash slash-two"></div>
      <div className="white-slash"></div>
      <div className="floating-circle circle-one"></div>
      <div className="floating-circle circle-two"></div>
      <div className="floating-circle circle-three"></div>
      <div className="title-plate">
        <h1>HERAN PATEL</h1>
      </div>

      <p className="subtitle">
        Persona 5 Inspired Portfolio
      </p>

      <div className="menu">
        <Link to="/about">
          <motion.button
            className="menu-button"
            whileHover={{ scale: 1.1, x: 10 }}
            whileTap={{ scale: 0.95 }}
            onClick={playClick}
          >
            ABOUT
          </motion.button>
        </Link>

        <Link to="/projects">
          <motion.button
            className="menu-button"
            whileHover={{ scale: 1.1, x: 10 }}
            whileTap={{ scale: 0.95 }}
            onClick={playClick}
          >
            PROJECTS
          </motion.button>
        </Link>

        <Link to="/skills">
          <motion.button
            className="menu-button"
            whileHover={{ scale: 1.1, x: 10 }}
            whileTap={{ scale: 0.95 }}
            onClick={playClick}
          >
            SKILLS
          </motion.button>
        </Link>

        <Link to="/contact">
          <motion.button
            className="menu-button"
            whileHover={{ scale: 1.1, x: 10 }}
            whileTap={{ scale: 0.95 }}
            onClick={playClick}
          >
            CONTACT
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App