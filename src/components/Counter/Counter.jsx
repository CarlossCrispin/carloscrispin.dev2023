import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
export default function Counter({ setShowNav }) {
  const [counter, setCounter] = useState(0)

  // Third Attempts
  useEffect(() => {
    counter === 100 && setShowNav(true)
    const timer =
      counter < 100 && setInterval(() => setCounter(counter + 1), 50)
    return () => clearInterval(timer)
  }, [counter])

  return (
    <div className="absolute bottom-20 left-20 animate__animated animate__fadeIn">
      <div className="text-4xl md:text-9xl font-bold text-slate-800 dark:text-slate-200">
        {counter} %
      </div>
    </div>
  )
}
Counter.propTypes = {
  setShowNav: PropTypes.func
}
