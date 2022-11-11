import classNames from 'classnames';
import { useState } from 'react';

const Test = () => {

  const [open, setOpen] = useState(false)
  const handleClick = () => {
    console.log('click')
    setOpen(!open)
  }
  return (
    <div>
      <div
        className={classNames(
          open
            ? 'flex items-center justify-center flex-col py-20 border border-indigo-300  bg-purple-200 h-4/5 mt-40 transition duration-700 ease-in-out'
            : 'flex items-center justify-center flex-col py-20 border border-indigo-300  bg-purple-200 h-4/5 transition duration-700 ease-in-out'
        )}
      >
        <div
          className={classNames(
            open
              ? 'w-12 h-12 bg-lime-300 translate-y-96 border transition duration-700 ease-in-out'
              : 'w-12 h-12 bg-red-300 transition duration-700 ease-in-out'
          )}
          onClick={handleClick}
        ></div>
      </div>
    </div>
  )
}

export default Test;
