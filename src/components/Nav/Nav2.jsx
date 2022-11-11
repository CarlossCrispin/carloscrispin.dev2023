import { useState, useMemo } from 'react'
// import PropTypes from 'prop-types'
import classNames from 'classnames'
import { IoMdClose } from 'react-icons/io'
import { TbMenu } from 'react-icons/tb'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [openToogle, setOpenToogle] = useState(false)
  const [selected, setSelected] = useState(true)
  const handleClick = () => {
    setSelected(!selected)
  }

  const Icon = useMemo(
    () => (openToogle ? <IoMdClose size={25} /> : <TbMenu size={25} />),
    [openToogle]
  )

  const bounce = useMemo(
    () =>
      selected
        ? 'w-full transition ease-in-out hover:translate-x-24 hover:scale-110 hover:text-lime-300 hover:font-medium duration-300 mt-2  hover:animate-bounce'
        : 'w-full transition ease-in-out hover:translate-x-24 hover:scale-110 hover:text-lime-300 hover:font-medium duration-300 mt-2  ',
    [selected]
  )

  const classPosition = useMemo(
    () =>
      selected
        ? 'translate-y-96 block transition duration-1200 ease-in-out text-5xl md:text-8xl p-5 hidden md:block translate-y-24 my-9 border border-lime-300'
        : 'translate-y-0 transition duration-1200 ease-in-out text-5xl md:text-8xl p-5 hidden md:block translate-y-24 my-9',
    [selected]
  )

  const classRotation = useMemo(
    () =>
      openToogle
        ? '-rotate-90 transition duration-700 ease-in-out '
        : 'transition duration-700 ease-in-out ',
    [openToogle]
  )

  const showNav = useMemo(
    () =>
      openToogle
        ? 'md:hidden -translate-y-0 transition duration-700 ease-in-out text-3xl'
        : 'md:hidden -translate-y-96 transition duration-700 ease-in-out text-2xl',
    [openToogle]
  )
  const handleToogleOpen = () => setOpenToogle(!openToogle)

  return (
    <nav className="text-indigo-600 dark:text-slate-50 absolute z-10 h-screen border border-red-600">
      <div className="max-w-6xl mx-auto">
        <div className="md:hidden flex items-center p-2 px-3">
          {/* logo */}
          <div className="mr-5">
            <button
              onClick={handleToogleOpen}
              className={(classNames(), classRotation)}
            >
              {Icon}
            </button>
          </div>
        </div>
        <div className={(classNames(), classPosition)} onClick={handleClick}>
          <ul>
            <li className="py-4">
              <Link to="/">
                <div className={(classNames(), bounce)}>Inicio</div>
              </Link>
            </li>
            {!selected ? (
              <>
                <li className="py-4">
                  <Link to="/home">
                    <div className="w-full transition ease-in-out hover:translate-x-24 hover:scale-110 hover:text-lime-300 hover:font-medium duration-300 mt-2">
                      Yo
                    </div>
                  </Link>
                </li>
                <li className="py-4">
                  <Link to="/about">
                    <div className="w-full transition ease-in-out hover:translate-x-24 hover:scale-110 hover:text-lime-300 hover:font-medium duration-300 mt-2">
                      Más de mi
                    </div>
                  </Link>
                </li>
              </>
            ) : null}
          </ul>
        </div>

        {/* mobile menu */}
        <div className={(classNames(), showNav)}>
          <ul className="ml-8 translate-y-24 ">
            <li className="py-4">
              <Link to="/">
                <div className="w-full font-light transition ease-in-out hover:translate-x-6 hover:scale-110 hover:text-lime-300 hover:font-light duration-300 mt-2 border-4-bottom border-lime-300">
                  Inicio
                </div>
              </Link>
            </li>
            <li className="py-4">
              <Link to="/home">
                <div className="w-full font-light transition ease-in-out hover:translate-x-6 hover:scale-110 hover:text-lime-300 hover:font-light duration-300 mt-2">
                  Yo
                </div>
              </Link>
            </li>
            <li className="py-4">
              <Link to="/about">
                <div className="w-full font-light transition ease-in-out hover:translate-x-6 hover:scale-110 hover:text-lime-300 hover:font-light duration-300 mt-2">
                  Más de mi
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    /*  */
  )
}

Nav.propTypes = {}

export default Nav
