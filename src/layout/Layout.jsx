// import PropTypes from 'prop-types'
import { Route, Routes } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import VideoBG from '../components/VideoBG/VideoBG'
import About from '../pages/About/About'
import Home from '../pages/Home/Home'
import Switch from '../components/Switch/Switch'
import { useEffect, useState } from 'react'

const Layout = () => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (window.matchMedia('(preferer-color-scheme : dark )').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div>
      <Switch theme={theme} setTheme={setTheme} />
      <Nav />
      <Routes>
        <Route path="/" element={<VideoBG />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}

Layout.propTypes = {}

export default Layout
