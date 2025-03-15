import React from 'react'
import img from "../../public/Images/img.gif"

export const Loader = ({isLoading }) => {
  return (
    <div className={`fixed inset-0 bg-white dark:bg-gray-900 z-50 grid place-items-center ${isLoading ? "opacity-100":"opacity-0 pointer-events-none"} transition-opacity duration-500 ease-in-out`}>
        <img src={img} alt="Loader" className='w-40' />
    </div>
  )
}
