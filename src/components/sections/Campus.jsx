import Reveal from "../animation/RevealTemp"
import campusImage from "../../assets/campus.png"

function Campus() {
  return (
    <section className="campus-section" id="campus">

      <div className="campus-container">

        <Reveal>
          <div className="campus-image-wrapper">
            <img
              src={campusImage}
              alt="Tulas International School campus"
              className="campus-image"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="campus-content">

            <p className="section-label">
              CAMPUS LIFE
            </p>

            <h2>
              A place to
              <span>live, learn and grow.</span>
            </h2>

            <p>
              Our campus provides students with a nurturing
              environment where academics, sports, creativity
              and community come together.
            </p>

            <a href="#beyond" className="campus-link">
              Explore Campus
              <span>↗</span>
            </a>

          </div>
        </Reveal>

      </div>

    </section>
  )
}

export default Campus