import * as m from "framer-motion/m";
import { profile } from "../data/portfolio.js";
import { fadeUp } from "../motion.js";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <m.span
          className="section__eyebrow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          About
        </m.span>

        <div className={styles.grid}>
          <m.div
            className={styles.imageWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <picture>
              <source srcSet="/headshot.webp" type="image/webp" />
              <img
                src={profile.headshot}
                alt={`Portrait of ${profile.name}`}
                width="900"
                height="1350"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div className={styles.imageBorder} aria-hidden="true" />
          </m.div>

          <m.div
            className={styles.content}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className={styles.title}>
              Learning, growing, and contributing at scale.
            </h2>
            {profile.about.map((paragraph, index) => (
              <p key={index} className={styles.text}>
                {paragraph}
              </p>
            ))}
            <dl className={styles.facts}>
              {profile.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </m.div>
        </div>
      </div>
    </section>
  );
}
