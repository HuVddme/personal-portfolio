import * as m from "framer-motion/m";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import { experiences } from "../data/portfolio.js";
import { fadeUp } from "../motion.js";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <m.span
          className="section__eyebrow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          Experience
        </m.span>
        <m.h2
          className="section__title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          Where I&apos;ve worked
        </m.h2>

        <ol className={styles.timeline}>
          {experiences.map((item, index) => (
            <m.li
              key={`${item.company}-${index}`}
              className={styles.item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <span className={styles.dot} aria-hidden="true" />
              <div className={styles.card}>
                <div className={styles.cardHead}>
                  <div>
                    <h3 className={styles.role}>{item.role}</h3>
                    <p className={styles.company}>
                      {item.company}
                      <span className={styles.location}> · {item.location}</span>
                    </p>
                  </div>
                  <span className={styles.period}>{item.period}</span>
                </div>
                {item.focus && <h4 className={styles.focus}>{item.focus}</h4>}
                {item.summary && <p className={styles.summary}>{item.summary}</p>}
                {item.poster && (
                  <aside className={styles.poster} aria-label="Research poster">
                    <a
                      className={styles.posterPreview}
                      href={item.poster.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Alzheimer's research poster (PDF, opens in a new tab)"
                    >
                      <img
                        src={item.poster.preview}
                        alt="Research poster showing the audio-text pipeline, prediction plots, and results table"
                        width="720"
                        height="540"
                        loading="lazy"
                        decoding="async"
                      />
                    </a>
                    <div className={styles.posterContent}>
                      <p className={styles.posterLabel}>Research poster · {item.poster.format}</p>
                      <h5 className={styles.posterTitle}>{item.poster.title}</h5>
                      <p className={styles.posterAuthors}>{item.poster.authors}</p>
                      <p className={styles.posterAuthors}>{item.poster.affiliation}</p>
                      <p className={styles.posterDescription}>{item.poster.description}</p>
                      <p className={styles.posterResult}>{item.poster.result}</p>
                      <div className={styles.posterActions}>
                        <a href={item.poster.href} target="_blank" rel="noopener noreferrer"
                          aria-label="View poster (PDF, opens in a new tab)">
                          View poster <FiExternalLink aria-hidden="true" />
                        </a>
                        <a href={item.poster.href} download={item.poster.downloadName}>
                          Download PDF <FiDownload aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </aside>
                )}
                <ul className={styles.points}>
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                {item.tech && (
                  <ul className={styles.tech} aria-label={`${item.role} technologies`}>
                    {item.tech.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                )}
              </div>
            </m.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
