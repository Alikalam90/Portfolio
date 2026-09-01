import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";

gsap.registerPlugin(ScrollTrigger);

const experiments = [
  {
    number: "01",
    title: "INTERACTIVE WEB",
    description:
      "Exploring how animation, interaction and thoughtful UI can turn a simple website into an experience.",
    stack: ["REACT", "GSAP", "UI / UX"],
    type: "INTERACTION",
  },
  {
    number: "02",
    title: "AI PLAYGROUND",
    description:
      "Small experiments exploring machine learning, intelligent systems and practical AI applications.",
    stack: ["PYTHON", "AI / ML"],
    type: "AI / ML",
  },
  {
    number: "03",
    title: "DATA SYSTEM",
    description:
      "Exploring how interfaces and databases can work together to turn structured data into useful experiences.",
    stack: ["SQL", "REACT", "DATABASE"],
    type: "SYSTEM",
  },
  {
    number: "04",
    title: "MOTION LAB",
    description:
      "Experiments with timing, transitions and interaction to understand what makes interfaces feel alive.",
    stack: ["GSAP", "FRAMER MOTION"],
    type: "EXPERIMENT",
  },
];

function App() {
  const appRef = useRef(null);
  const glowRef = useRef(null);

  const [darkMode, setDarkMode] = useState(true);

  /* =========================================================
     THEME
     ========================================================= */

  useLayoutEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  /* =========================================================
     CURSOR GLOW
     ========================================================= */

  useLayoutEffect(() => {
    const glow = glowRef.current;

    const handlePointerMove = (e) => {
      if (glow) {
        glow.style.setProperty("--cursor-x", `${e.clientX}px`);
        glow.style.setProperty("--cursor-y", `${e.clientY}px`);
        glow.style.opacity = "1";
      }
    };

    const handlePointerLeave = () => {
      if (glow) glow.style.opacity = "0";
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, []);

  /* =========================================================
     GSAP
     ========================================================= */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* HERO */

      gsap.from(".hero-content > *", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      });

      gsap.from(".hero-bottom > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.5,
        ease: "power3.out",
      });

      /* ABOUT */

      gsap.utils.toArray(".about-heading span").forEach((element) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
          y: 80,
          opacity: 0,
          duration: 0.9,
          ease: "power4.out",
        });
      });

      gsap.from(".about-description p", {
        scrollTrigger: {
          trigger: ".about-description",
          start: "top 80%",
          once: true,
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".about-stat", {
        scrollTrigger: {
          trigger: ".about-stats",
          start: "top 85%",
          once: true,
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".identity-card", {
        scrollTrigger: {
          trigger: ".identity-grid",
          start: "top 85%",
          once: true,
        },
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power4.out",
        clearProps: "transform",
      });

      /* SKILLS */

      gsap.utils.toArray(".skills-heading span").forEach((element) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
          y: 80,
          opacity: 0,
          duration: 0.9,
          ease: "power4.out",
        });
      });

      gsap.from(".skill-group", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 85%",
          once: true,
        },
        y: 70,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power4.out",
      });

      /* EXPERIMENTS */

      gsap.utils.toArray(".experiments-heading span").forEach((element) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        });
      });

      gsap.from(".experiments-intro > p", {
        scrollTrigger: {
          trigger: ".experiments-intro",
          start: "top 80%",
          once: true,
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".experiment-card", {
        scrollTrigger: {
          trigger: ".experiments-grid",
          start: "top 85%",
          once: true,
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      });

      gsap.from(".experiments-note", {
        scrollTrigger: {
          trigger: ".experiments-note",
          start: "top 90%",
          once: true,
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      /* CONTACT */

      gsap.from(".contact-label", {
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
          once: true,
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".contact-heading span", {
        scrollTrigger: {
          trigger: ".contact-heading",
          start: "top 80%",
          once: true,
        },
        y: 120,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
      });

      gsap.from(".contact-description", {
        scrollTrigger: {
          trigger: ".contact-description",
          start: "top 85%",
          once: true,
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".contact-cta", {
        scrollTrigger: {
          trigger: ".contact-cta",
          start: "top 85%",
          once: true,
        },
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power4.out",
      });

      gsap.from(".contact-links > *", {
        scrollTrigger: {
          trigger: ".contact-links",
          start: "top 90%",
          once: true,
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".footer-content > *", {
        scrollTrigger: {
          trigger: ".footer",
          start: "top 95%",
          once: true,
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });

      ScrollTrigger.refresh();
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={appRef}>

      {/* =====================================================
          CURSOR GLOW
          ===================================================== */}

      <div className="cursor-glow" ref={glowRef} aria-hidden="true"></div>


      {/* =====================================================
          NAVIGATION
          ===================================================== */}

      <nav className="nav">

        <div className="nav-logo">
          AK.
        </div>

        <div className="nav-status">
          <span className="status-dot"></span>
          AVAILABLE FOR OPPORTUNITIES
        </div>

        <div className="nav-actions">

          <div className="nav-index">
            01 / 05
          </div>

          <button
            className="theme-toggle"
            type="button"
            onClick={() => setDarkMode((previous) => !previous)}
            aria-label={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            <span
              className={`theme-icon ${
                darkMode ? "is-dark" : "is-light"
              }`}
            >
              {darkMode ? "☾" : "☀"}
            </span>

            <span className="theme-text">
              {darkMode ? "DARK" : "LIGHT"}
            </span>
          </button>

        </div>

      </nav>


      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="hero">

        <div className="hero-content">

          <div className="hero-eyebrow">
            <span>AI STUDENT</span>

            <span className="separator">
              ×
            </span>

            <span>
              FULL-STACK DEVELOPER
            </span>
          </div>

          <h1 className="hero-title">

            <span>
              I BUILD
            </span>

            <span className="hero-title-accent">
              DIGITAL
            </span>

            <span>
              EXPERIENCES.
            </span>

          </h1>

          <p className="hero-description">
            I'm Ali Kalam — an AI student and developer focused on
            building intelligent, interactive and thoughtfully designed
            digital experiences.
          </p>

        </div>


        <div className="hero-bottom">

          <div className="hero-location">

            <span>
              BASED IN
            </span>

            <strong>
              KARACHI, PK
            </strong>

          </div>

          <div className="hero-scroll">

            <span>
              SCROLL TO EXPLORE
            </span>

            <span className="scroll-arrow">
              ↓
            </span>

          </div>

          <div className="hero-year">
            2026
          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT
          ===================================================== */}

      <section className="about">

        <div className="section-top">

          <div className="section-label">
            01 — ABOUT
          </div>

          <div className="section-number">
            02
          </div>

        </div>


        <div className="about-main">

          <div className="about-heading">

            <span>
              THE PERSON
            </span>

            <span>
              BEHIND THE
            </span>

            <span className="about-heading-accent">
              CODE.
            </span>

          </div>


          <div className="about-description">

            <p>
              I'm Ali Kalam, a 5th semester Artificial Intelligence
              student and developer who enjoys turning ideas into
              functional digital experiences.
            </p>

            <p>
              My interests sit at the intersection of AI, software
              development and interactive design. I enjoy understanding
              how things work, building them from the ground up and
              refining the details until they feel right.
            </p>

          </div>

        </div>


        <div className="about-stats">

          <div className="about-stat">

            <span className="stat-number">
              20
            </span>

            <span className="stat-label">
              AGE
            </span>

          </div>

          <div className="about-stat">

            <span className="stat-number">
              05
            </span>

            <span className="stat-label">
              SEMESTER
            </span>

          </div>

          <div className="about-stat">

            <span className="stat-number">
              AI
            </span>

            <span className="stat-label">
              SPECIALIZATION
            </span>

          </div>

          <div className="about-stat">

            <span className="stat-number">
              ∞
            </span>

            <span className="stat-label">
              CURIOSITY
            </span>

          </div>

        </div>


        <div className="identity-grid">

          <article className="identity-card">

            <span className="identity-number">
              01
            </span>

            <span className="identity-icon">
              ◉
            </span>

            <h3>
              AI
            </h3>

            <p>
              Exploring intelligent systems, machine learning and
              practical applications of AI.
            </p>

            <span className="identity-arrow">
              ↗
            </span>

          </article>


          <article className="identity-card">

            <span className="identity-number">
              02
            </span>

            <span className="identity-icon">
              ◇
            </span>

            <h3>
              BUILD
            </h3>

            <p>
              Creating full-stack applications with modern web
              technologies and clean architecture.
            </p>

            <span className="identity-arrow">
              ↗
            </span>

          </article>


          <article className="identity-card">

            <span className="identity-number">
              03
            </span>

            <span className="identity-icon">
              ✦
            </span>

            <h3>
              DESIGN
            </h3>

            <p>
              Turning functional interfaces into engaging experiences
              through interaction, motion and thoughtful UI.
            </p>

            <span className="identity-arrow">
              ↗
            </span>

          </article>

        </div>

      </section>


      {/* =====================================================
          SKILLS
          ===================================================== */}

      <section className="skills-section">

        <div className="section-top">

          <div className="section-label">
            02 — STACK
          </div>

          <div className="section-number">
            03
          </div>

        </div>


        <div className="skills-intro">

          <h2 className="skills-heading">

            <span>
              TOOLS I USE
            </span>

            <span>
              TO TURN
            </span>

            <span className="skills-heading-accent">
              IDEAS INTO REALITY.
            </span>

          </h2>


          <p>
            My toolkit sits across artificial intelligence, full-stack
            development and interactive design. I choose the technology
            based on the problem, not the other way around.
          </p>

        </div>


        <div className="skills-grid">

          <div className="skill-group">

            <div className="skill-group-header">
              <span>01</span>
              <span>AI & DATA</span>
            </div>

            <p className="skill-group-description">
              Building intelligent systems and working with data.
            </p>

            <Technology
              name="Python"
              type="LANGUAGE"
            />

            <Technology
              name="Machine Learning"
              type="SPECIALIZATION"
            />

            <Technology
              name="SQL"
              type="DATABASE"
            />

          </div>


          <div className="skill-group">

            <div className="skill-group-header">
              <span>02</span>
              <span>DEVELOPMENT</span>
            </div>

            <p className="skill-group-description">
              Creating modern applications from interface to backend.
            </p>

            <Technology
              name="React"
              type="FRONTEND"
            />

            <Technology
              name="JavaScript"
              type="LANGUAGE"
            />

            <Technology
              name="Node.js"
              type="BACKEND"
            />

          </div>


          <div className="skill-group">

            <div className="skill-group-header">
              <span>03</span>
              <span>CREATIVE</span>
            </div>

            <p className="skill-group-description">
              Adding motion, interaction and personality to interfaces.
            </p>

            <Technology
              name="GSAP"
              type="ANIMATION"
            />

            <Technology
              name="Framer Motion"
              type="ANIMATION"
            />

            <Technology
              name="UI / UX"
              type="DESIGN"
            />

          </div>


          <div className="skill-group">

            <div className="skill-group-header">
              <span>04</span>
              <span>TOOLS</span>
            </div>

            <p className="skill-group-description">
              The tools that keep the development workflow moving.
            </p>

            <Technology
              name="Git"
              type="VERSION CONTROL"
            />

            <Technology
              name="GitHub"
              type="COLLABORATION"
            />

            <Technology
              name="Vercel"
              type="DEPLOYMENT"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          EXPERIMENTS
          ===================================================== */}

      <section className="experiments-section">

        <div className="section-top">

          <div className="section-label">
            03 — EXPERIMENTS
          </div>

          <div className="section-number">
            04
          </div>

        </div>


        <div className="experiments-intro">

          <h2 className="experiments-heading">

            <span>
              THINGS I'VE
            </span>

            <span>
              BEEN
            </span>

            <span className="experiments-heading-accent">
              BUILDING.
            </span>

          </h2>


          <p>
            A collection of experiments, ideas and small projects
            I've built while exploring development, artificial
            intelligence and interactive design.
          </p>

        </div>


        <div className="experiments-grid">

          {experiments.map((experiment) => (

            <article
              className="experiment-card"
              key={experiment.number}
            >

              <div className="experiment-top">

                <span className="experiment-number">
                  {experiment.number}
                </span>

                <span className="experiment-type">
                  {experiment.type}
                </span>

              </div>


              <div className="experiment-visual">

                <div className="visual-grid"></div>

                <div className="visual-orbit orbit-one"></div>

                <div className="visual-orb"></div>

                <div className="visual-orbit orbit-two"></div>

              </div>


              <div className="experiment-content">

                <h3>
                  {experiment.title}
                </h3>

                <p>
                  {experiment.description}
                </p>

              </div>


              <div className="experiment-footer">

                <div className="experiment-stack">

                  {experiment.stack.map((item) => (

                    <span key={item}>
                      {item}
                    </span>

                  ))}

                </div>

                <span className="experiment-arrow">
                  ↗
                </span>

              </div>

            </article>

          ))}

        </div>


        <div className="experiments-note">

          <span>
            THESE ARE EXPERIMENTS —
          </span>

          <span>
            THE REAL WORK WILL COME HERE.
          </span>

        </div>

      </section>


      {/* =====================================================
          CONTACT
          ===================================================== */}

      <section className="contact-section">

        <div className="contact-grid-bg"></div>


        <div className="contact-inner">

          <div className="contact-label">

            <span className="contact-dot"></span>

            04 — LET'S CONNECT

          </div>


          <h2 className="contact-heading">

            <span>
              LET'S BUILD
            </span>

            <span className="contact-heading-accent">
              SOMETHING.
            </span>

          </h2>


          <p className="contact-description">
            Have an idea, a project, an opportunity or simply want
            to talk about technology? I'm always interested in
            hearing what you're working on.
          </p>


          <a
            className="contact-cta"
            href="mailto:your-email@example.com"
          >

            <span>
              GET IN TOUCH
            </span>

            <span className="contact-cta-arrow">
              ↗
            </span>

          </a>


          <div className="contact-links">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                GITHUB
              </span>

              <span>
                ↗
              </span>

            </a>


            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                LINKEDIN
              </span>

              <span>
                ↗
              </span>

            </a>


            <a
              href="mailto:your-email@example.com"
            >
              <span>
                EMAIL
              </span>

              <span>
                ↗
              </span>

            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer className="footer">

        <div className="footer-content">

          <div className="footer-name">
            ALI KALAM<span>.</span>
          </div>

          <div className="footer-middle">
            DESIGNED & BUILT WITH
            <span>
              {" "}REACT + GSAP
            </span>
          </div>

          <div className="footer-right">
            © 2026
          </div>

        </div>

      </footer>

    </main>
  );
}


/* =========================================================
   TECHNOLOGY COMPONENT
   ========================================================= */

function Technology({ name, type }) {

  return (
    <div className="technology">

      <div className="technology-main">

        <span className="technology-name">
          {name}
        </span>

        <span className="technology-arrow">
          ↗
        </span>

      </div>


      <div className="technology-meta">

        <span>
          {type}
        </span>

        <span>
          WORKING
        </span>

      </div>

    </div>
  );
}


export default App;