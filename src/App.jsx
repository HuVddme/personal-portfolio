import { Analytics } from "@vercel/analytics/react";
import { LazyMotion, MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <LazyMotion
      features={() =>
        import("./motion-features.js").then((module) => module.default)
      }
      strict
    >
      <MotionConfig reducedMotion="user">
        <a className="skipLink" href="#main-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex="-1">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <Analytics />
      </MotionConfig>
    </LazyMotion>
  );
}
