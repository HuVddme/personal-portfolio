import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, profile } from "../data/portfolio.js";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const linksRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .filter((link) => !link.external)
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    const links = [...linksRef.current.querySelectorAll("a[href]")];
    document.body.style.overflow = "hidden";
    links[0]?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || links.length === 0) return;
      const first = links[0];
      const last = links.at(-1);

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const handleNav = (event, id) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `#${id}`);
    setOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={`container ${styles.nav}`} aria-label="Primary navigation">
        <a
          href="#home"
          className={styles.brand}
          onClick={(event) => handleNav(event, "home")}
        >
          {profile.firstName}
          <span className={styles.brandDot}>.</span>
        </a>

        <ul
          id="primary-navigation"
          ref={linksRef}
          className={`${styles.links} ${open ? styles.open : ""}`}
        >
          {navLinks.map((link) =>
            link.external ? (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.link} ${styles.linkExternal}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`${styles.link} ${
                    active === link.id ? styles.active : ""
                  }`}
                  aria-current={active === link.id ? "page" : undefined}
                  onClick={(event) => handleNav(event, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ),
          )}
        </ul>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((previous) => !previous)}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>
    </header>
  );
}
