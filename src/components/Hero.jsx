import * as m from "framer-motion/m";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { profile, projects } from "../data/portfolio.js";
import { fadeUp, stagger } from "../motion.js";
import styles from "./Hero.module.css";

export default function Hero() {
  const featuredProject = projects[0];
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className={styles.hero}>
      <m.div
        className={`container ${styles.inner}`}
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <m.p className={styles.status} variants={fadeUp}>
          <span aria-hidden="true" />
          {profile.availability}
        </m.p>

        <m.p className={styles.greeting} variants={fadeUp}>
          Hello, I&apos;m
        </m.p>

        <m.h1 className={styles.name} variants={fadeUp}>
          {profile.name}
        </m.h1>

        <m.p className={styles.specialization} variants={fadeUp}>
          {profile.specialization}
        </m.p>

        <m.p className={styles.tagline} variants={fadeUp}>
          Software engineer passionate about AI/ML and full-stack development,
          building technology that solves real problems and drives meaningful
          change.
        </m.p>

        <m.p className={styles.credentials} variants={fadeUp}>
          {profile.credential} <span>•</span> {profile.location}
        </m.p>

        <m.div className={styles.actions} variants={fadeUp}>
          <button
            className="btn btn--primary"
            onClick={() => scrollTo("contact")}
          >
            Get in touch <FiArrowUpRight aria-hidden="true" />
          </button>
          <a
            className="btn btn--ghost"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            View resume
          </a>
        </m.div>

        <m.a
          className={styles.featured}
          href={featuredProject.href}
          target="_blank"
          rel="noreferrer"
          variants={fadeUp}
        >
          <span className={styles.featuredLabel}>Featured project</span>
          <span className={styles.featuredBody}>
            <strong>{featuredProject.name}</strong>
            <small>{featuredProject.tagline}</small>
          </span>
          <FiArrowRight aria-hidden="true" />
        </m.a>
      </m.div>
    </section>
  );
}
