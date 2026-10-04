import Reveal from "../animation/RevealTemp"

function Admissions() {
  return (
    <section className="admissions-section" id="admissions">
      <div className="admissions-container">

        <Reveal>
          <p className="admissions-label">ADMISSIONS</p>

          <h2>
            Give your child a place to
            <span> discover what they can become.</span>
          </h2>

          <p className="admissions-text">
            Explore admissions at Tulas International School and
            take the next step towards a learning experience built
            around academic excellence and holistic development.
          </p>

          <div className="admissions-actions">
            <a
              href="tel:+919837983791"
              className="admissions-primary"
            >
              Call Admissions
            </a>

            <a
              href="#footer"
              className="admissions-secondary"
            >
              Enquire Now
            </a>
          </div>

          <p className="admissions-phone">
            Admissions Helpline: +91 98379 83791
          </p>
        </Reveal>

      </div>
    </section>
  )
}

export default Admissions