import Reveal from "../animation/RevealTemp"

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">

        <Reveal>
          <div className="footer-main">
            <div className="footer-brand">
              <p className="footer-label">TULAS INTERNATIONAL SCHOOL</p>

              <h2>
                Building confident
                <span> global citizens.</span>
              </h2>
            </div>

            <div className="footer-contact">
              <p>Dehradun, Uttarakhand</p>

              <a href="tel:+919837983791">
                +91 98379 83791
              </a>

              <a href="mailto:info@tis.edu.in">
                info@tis.edu.in
              </a>
            </div>
          </div>
        </Reveal>

        <div className="footer-bottom">
          <p>
            © 2026 Tulas International School. All rights reserved.
          </p>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#academics">Academics</a>
            <a href="#admissions">Admissions</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer