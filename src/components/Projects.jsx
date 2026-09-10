import * as m from "framer-motion/m";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { FaMusic, FaRobot, FaMoneyBillTrendUp } from "react-icons/fa6";
import { projects } from "../data/portfolio.js";
import { fadeUp } from "../motion.js";
import styles from "./Projects.module.css";

const iconMap = {
  music: FaMusic,
  finance: FaMoneyBillTrendUp,
  robot: FaRobot,
};

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <m.span
          className="section__eyebrow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          Selected work
        </m.span>
        <m.div
          className={styles.headingRow}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          <h2 className="section__title">Products I&apos;ve built</h2>
          <p>
            AI, product engineering, and full-stack systems built around real
            user needs.
          </p>
        </m.div>

        <div className={styles.grid}>
          {projects.map((project) => {
            const Icon = iconMap[project.icon];
            return (
              <m.article
                key={project.name}
                className={styles.card}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <a
                  className={styles.preview}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.name} live demo`}
                >
                  <img
                    src={project.preview}
                    alt={`${project.name} application preview`}
                    width="1280"
                    height="720"
                    loading="lazy"
                    decoding="async"
                  />
                </a>

                <div className={styles.cardBody}>
                  <div className={styles.cardTop}>
                    <span className={styles.icon}>
                      {project.logo ? (
                        <img
                          className={styles.projectLogo}
                          src={project.logo}
                          alt=""
                          aria-hidden="true"
                        />
                      ) : (
                        Icon && <Icon size={22} aria-hidden="true" />
                      )}
                    </span>
                    <span className={styles.meta}>
                      {project.year} · {project.status}
                    </span>
                  </div>

                  <h3 className={styles.name}>{project.name}</h3>
                  {project.tagline && (
                    <p className={styles.tagline}>{project.tagline}</p>
                  )}
                  <p className={styles.description}>{project.description}</p>

                  <ul
                    className={styles.tech}
                    aria-label={`${project.name} technologies`}
                  >
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>

                  <div className={styles.actions}>
                    <a href={project.href} target="_blank" rel="noreferrer">
                      Live demo <FiExternalLink aria-hidden="true" />
                    </a>
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noreferrer">
                        Source <FiGithub aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </m.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
