import Reveal from "../animation/RevealTemp"

function Beyond() {
  const activities = [
    {
      number: "01",
      title: "Sports",
      text: "Students develop discipline, teamwork and confidence through a wide range of sporting activities."
    },
    {
      number: "02",
      title: "Arts & Creativity",
      text: "Creative experiences give students the freedom to express ideas, discover interests and develop imagination."
    },
    {
      number: "03",
      title: "Student Life",
      text: "Life at TIS encourages students to build friendships, independence and a strong sense of community."
    }
  ]

  return (
    <section className="beyond-section" id="beyond">

      <div className="beyond-container">

        <Reveal>
          <div className="beyond-heading">

            <p className="section-label">
              BEYOND ACADEMICS
            </p>

            <h2>
              Growth happens
              <span>outside the classroom too.</span>
            </h2>

            <p>
              Education at TIS extends beyond textbooks,
              giving students opportunities to explore their
              interests and discover their strengths.
            </p>

          </div>
        </Reveal>

        <div className="activities-list">

          {activities.map((activity, index) => (
            <Reveal
              key={activity.number}
              delay={index * 0.12}
            >
              <article className="activity-row">

                <span className="activity-number">
                  {activity.number}
                </span>

                <h3>
                  {activity.title}
                </h3>

                <p>
                  {activity.text}
                </p>

              </article>
            </Reveal>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Beyond