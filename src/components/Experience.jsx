import * as m from "framer-motion/m";
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
                <ul className={styles.points}>
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </m.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
