import Reveal from "../animation/RevealTemp"
import campusImage from "../../assets/campus.png"

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <Reveal>
          <p className="hero-label">
            TULAS INTERNATIONAL SCHOOL
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1>
            Learn. Explore.
            <span> Become More.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="hero-text">
            TIS is one of India's top boarding and day schools
            in Dehradun, focused on academic excellence,
            holistic development and preparing students
            to become global citizens.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="hero-buttons">
            <a href="#about" className="primary-button">
              Explore TIS
            </a>

            <a href="#admissions" className="secondary-button">
              Admissions
            </a>
          </div>
        </Reveal>

      </div>

      <Reveal delay={0.2}>
        <div className="hero-image">
          <img
            src={campusImage}
            alt="Tulas International School campus"
          />

          <div className="hero-image-content">
            <span>EST. 2012</span>
            <strong>DEHRADUN</strong>
          </div>
        </div>
      </Reveal>

    </section>
  )
}

export default Hero