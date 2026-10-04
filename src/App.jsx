import { useEffect, useState } from "react"

import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Stats from "./components/sections/Stats"
import Academics from "./components/sections/Academics"
import Campus from "./components/sections/Campus"
import Beyond from "./components/sections/Beyond"
import Admissions from "./components/sections/Admissions"

import ScrollProgress from "./components/animation/ScrollProgress"

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("tis-theme") || "light"
  })

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    localStorage.setItem("tis-theme", theme)
  }, [theme])

  return (
    <div className={`app ${theme}`}>
      <ScrollProgress />

      <Navbar
        theme={theme}
        onThemeChange={changeTheme}
      />

      <main>
        <Hero />
        <About />
        <Stats />
        <Academics />
        <Campus />
        <Beyond />
        <Admissions />
      </main>

      <Footer />
    </div>
  )
}

export default App