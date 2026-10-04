import Reveal from "../animation/RevealTemp"

function Academics() {
  const learningAreas = [
    {
      number: "01",
      title: "CBSE Curriculum",
      text: "A strong academic foundation that encourages reasoning, analytical thinking and independent learning.",
    },
    {
      number: "02",
      title: "Experiential Learning",
      text: "Project-based activities, educational trips and practical experiences help students connect learning with real life.",
    },
    {
      number: "03",
      title: "Technology",
      text: "Digital classrooms and modern learning tools create an engaging environment for today's students.",
    },
    {
      number: "04",
      title: "Critical Thinking",
      text: "Students are encouraged to question, explore and develop the confidence to think beyond the textbook.",
    },
  ]

  return (
    <section className="academics-section" id="academics">

      <div className="academics-container">

        <Reveal>
          <div className="academics-intro">

            <p className="section-label">
              ACADEMICS
            </p>

            <h2>
              Learning that goes
              <span>beyond the textbook.</span>
            </h2>

            <p className="academics-description">
              At TIS, education combines academic knowledge with
              creativity, technology and practical experiences
              to help students become confident learners.
            </p>

          </div>
        </Reveal>

        <div className="learning-grid">

          {learningAreas.map((area, index) => (
            <Reveal
              key={area.number}
              delay={index * 0.1}
            >
              <article className="learning-item">

                <span className="learning-number">
                  {area.number}
                </span>

                <div>
                  <h3>{area.title}</h3>

                  <p>{area.text}</p>
                </div>

              </article>
            </Reveal>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Academics