import Reveal from "../animation/RevealTemp"
function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        <Reveal>
          <div className="about-heading">
            <p className="section-label">ABOUT TIS</p>

            <h2>
              Boarding and Day
              <span>School Excellence</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="about-content">

            <p>
              We provide world-class education, modern facilities,
              and a nurturing environment that empowers students
              to excel academically and personally.
            </p>

            <p>
              Established in 2012, Tulas International School
              combines academic excellence with holistic development
              to prepare students for a changing world.
            </p>

            <div className="about-year">
              <strong>2012</strong>
              <span>Established</span>
            </div>

          </div>
        </Reveal>

      </div>

    </section>
  )
}

export default About