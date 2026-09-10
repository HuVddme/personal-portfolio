import * as m from "framer-motion/m";
import { FiArrowUpRight, FiPause, FiPlay } from "react-icons/fi";
import { profile } from "../data/portfolio.js";
import useHeroTyping from "../hooks/useHeroTyping.js";
import { fadeUp, stagger } from "../motion.js";
import styles from "./Hero.module.css";

export default function Hero() {
  const typing = useHeroTyping(profile.name, profile.roles);
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({
      behavior: typing.reducedMotion ? "instant" : "smooth",
    });

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
          <span className={styles.screenReaderOnly}>{profile.name}</span>
          <span className={styles.typingStack} aria-hidden="true">
            <span className={styles.reserve}>{profile.name}</span>
            <span>
              {typing.name}
              {typing.naming && <span className={styles.cursor} />}
            </span>
          </span>
        </m.h1>

        <m.div className={styles.roleRow} variants={fadeUp}>
          <p className={styles.role}>
            <span className={styles.screenReaderOnly}>{profile.roles.join(". ")}</span>
            <span className={styles.typingStack} aria-hidden="true">
              {profile.roles.map((role) => (
                <span key={role} className={styles.reserve}>{role}</span>
              ))}
              <span>
                {typing.role}
                {typing.animated && !typing.naming && <span className={styles.cursor} />}
              </span>
            </span>
          </p>
          {typing.reducedMotion === false && (
            <button
              type="button"
              className={styles.typingToggle}
              onClick={typing.togglePaused}
              aria-label={typing.paused ? "Replay typing animation" : "Pause typing animation"}
              title={typing.paused ? "Replay typing animation" : "Pause typing animation"}
            >
              {typing.paused ? <FiPlay aria-hidden="true" /> : <FiPause aria-hidden="true" />}
            </button>
          )}
        </m.div>

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

      </m.div>
    </section>
  );
}
