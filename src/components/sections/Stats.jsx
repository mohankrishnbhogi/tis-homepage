import Reveal from "../animation/RevealTemp"

function Stats() {
  const stats = [
    {
      value: "22",
      label: "Acre Campus",
    },
    {
      value: "16+",
      label: "Olympic Sports",
    },
    {
      value: "24×7",
      label: "Medical Assistance",
    },
    {
      value: "6:1",
      label: "Student Teacher Ratio",
    },
  ]

  return (
    <section className="stats-section">
      <div className="stats-container">

        <Reveal>
          <p className="stats-intro">
            At TIS, learning extends beyond the classroom.
          </p>
        </Reveal>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.1}>
              <div className="stat-item">
                <span className="stat-number">
                  {stat.value}
                </span>

                <span className="stat-label">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Stats