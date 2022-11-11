// import PropTypes from 'prop-types'
import classNames from 'classnames'
import { IoMdClose } from 'react-icons/io'
import { TbMenu } from 'react-icons/tb'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  const [openToogle, setOpenToogle] = useState(false)

  const Icon = useMemo(
    () => (openToogle ? <IoMdClose size={25} /> : <TbMenu size={25} />),
    [openToogle]
  )

  const positionNav = classNames(
    openToogle
      ? 'flex items-center justify-center flex-col py-20 transition duration-300 ease-in-out absolute z-10 hidden md:block text-5xl md:text-8xl xl:text-9xl'
      : 'flex items-center justify-center flex-col py-20 transition duration-300 ease-in-out absolute z-10 hidden md:block text-5xl md:text-8xl xl:text-9xl'
  )

  const showNav = classNames(
    openToogle
      ? 'md:hidden transition duration-700 ease-in-out text-3xl'
      : 'md:hidden -translate-y-96 transition duration-700 ease-in-out text-2xl'
  )

  const bounce = classNames(
    openToogle
      ? 'w-full transition ease-in-out hover:translate-x-24 hover:scale-110 hover:text-lime-300 hover:font-medium duration-300 mt-2  hover:animate-bounce'
      : 'w-full transition ease-in-out hover:translate-x-24 hover:scale-110 hover:text-lime-300 hover:font-medium duration-300 mt-2'
  )

  const classRotation = classNames(
    openToogle
      ? '-rotate-90 transition duration-700 ease-in-out '
      : 'transition duration-700 ease-in-out '
  )

  const linkClass =
    'w-full font-light hover:translate-x-6 hover:scale-110 hover:text-lime-300 hover:font-medium duration-300 mt-2 border-4-bottom border-lime-300'

  const handleToogleOpen = () => {
    setOpenToogle(!openToogle)
  }

  return (
    <div className="">
      <nav className="text-lime-600 dark:text-slate-50 absolute z-10">
        <div className="max-w-6xl mx-auto">
          <div className="md:hidden flex items-center p-2 px-3">
            {/* Buttom */}
            <div className="mr-5 flex justify-center p-2 text-lime-600 transition duration-150 ease-in-out bg-lime-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-lime-500 dark:text-lime-200 dark:bg-lime-500 hover:bg-lime-50 dark:hover:bg-lime-700 hover:text-lime-300 focus:outline-none focus:bg-lime-50 dark:focus:bg-lime-500 active:bg-lime-50">
              <button onClick={handleToogleOpen} className={classRotation}>
                {Icon}
              </button>
            </div>
            {/* mobile menu */}
          </div>
          <div className={showNav}>
            <ul className="ml-16 translate-y-24">
              <li className="py-4" onClick={handleToogleOpen}>
                <Link to="/">
                  <div className={linkClass}>Inicio</div>
                </Link>
                <div className="h-0.5 mt-1 w-full bg-slate-50  dark:bg-lime-300"></div>
              </li>
              <li className="py-4" onClick={handleToogleOpen}>
                <Link to="/home">
                  <div className={linkClass}>Yo</div>
                </Link>
                <div className="h-0.5 mt-1 w-full bg-slate-50  dark:bg-lime-300"></div>
              </li>
              <li className="py-4" onClick={handleToogleOpen}>
                <Link to="/about">
                  <div className={linkClass}>Más de mi</div>
                </Link>
                <div className="h-0.5 mt-1 w-full bg-slate-50  dark:bg-lime-300"></div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="text-lime-600 dark:text-slate-50 ml-8 font-light">
        <div className={positionNav}>
          <div
            className={classNames(
              openToogle
                ? 'transition duration-700 ease-in-out bottom-0 translate-y-20 xl:translate-y-22 fixed'
                : 'transition duration-700 ease-in-out top-12 fixed'
            )}
            onClick={handleToogleOpen}
          >
            <ul className="mt-12">
              <li className="py-8">
                <Link to="/">
                  <div className={linkClass + bounce}>Inicio</div>
                </Link>
                <div className="h-1 w-full bg-slate-50  dark:bg-lime-300"></div>
              </li>
              {!openToogle ? (
                <>
                  <li className="py-8">
                    <Link to="/home">
                      <div className={linkClass}>Yo</div>
                    </Link>
                    <div className="h-1 w-full bg-slate-50  dark:bg-lime-300"></div>
                  </li>
                  <li className="py-8">
                    <Link to="/about">
                      <div className={linkClass}>Más de mi</div>
                    </Link>
                    <div className="h-1 w-full bg-slate-50  dark:bg-lime-300"></div>
                  </li>
                </>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

Nav.propTypes = {}

export default Nav
