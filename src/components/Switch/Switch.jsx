import { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { MdLightMode, MdModeNight } from 'react-icons/md'
import './Switch.css'

function Switch({ theme, setTheme }) {
  const [night, setNight] = useState(false)

  const handleThemeSwitch = () => {
    setNight(!night)
    setTheme(theme === 'dark' ? 'ligth' : 'dark')
  }

  const Icon = useMemo(
    () => (night ? <MdModeNight size={25} /> : <MdLightMode size={25} />),
    [night]
  )

  return (
    <div className="fixed z-10 right-2 top-2">
      <button
        type="button"
        aria-label="Color Mode"
        onClick={handleThemeSwitch}
        className="flex justify-center p-2 text-lime-600 transition duration-150 ease-in-out bg-lime-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-lime-500 dark:text-lime-200 dark:bg-lime-500 hover:bg-lime-50 dark:hover:bg-lime-700 hover:text-lime-300 focus:outline-none focus:bg-lime-50 dark:focus:bg-lime-500 active:bg-lime-50"
      >
        <span>{Icon}</span>
      </button>
    </div>
  )
}

Switch.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func
}

export default Switch
