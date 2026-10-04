import { useState } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import "../../styles/navbar.css"

function Navbar({ theme, onThemeChange }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a
          href="#home"
          className="navbar-logo"
          aria-label="Tulas International School home"
        >
          TIS
        </a>

        {/* Navigation */}
        <nav
          className={`nav-links ${menuOpen ? "open" : ""}`}
        >
          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#academics" onClick={closeMenu}>
            Academics
          </a>

          <a href="#campus" onClick={closeMenu}>
            Campus
          </a>

          <a href="#beyond" onClick={closeMenu}>
            Beyond Academics
          </a>

          <a href="#admissions" onClick={closeMenu}>
            Admissions
          </a>
        </nav>

        {/* Right side actions */}
        <div className="navbar-actions">

          {/* Theme button */}
          <button
            className="theme-button"
            onClick={onThemeChange}
            aria-label={
              theme === "light"
                ? "Switch to dark mode"
                : "Switch to light mode"
            }
          >
            {theme === "light" ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} />
            )}
          </button>

          {/* Apply button */}
          <a
            href="#admissions"
            className="apply-button"
          >
            Apply Now
          </a>

          {/* Mobile menu */}
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

        </div>

      </div>
    </header>
  )
}

export default Navbar