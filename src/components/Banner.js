import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div class="bg-white dark:bg-gray-800 overflow-hidden relative">
      <div class="text-start w-full lg:w-1/2  py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span class="block text-center lg:text-left">Recuerda...</span>
          <span class="block text-indigo-500 text-center lg:text-left">
            Lo mejor debe ser para ti
          </span>
        </h2>
        <p class="text-xl mt-4 text-gray-400 text-center lg:text-left">
          Explora nuestras opciones y encuentra cual es importante
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0 ">
          <div class="mt-12 inline-flex rounded-md shadow ">
            <Link
              to="/lugares"
              class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Explorar
            </Link>
          </div>
        </div>
      </div>
      <img
        src="/banner.jpg"
        class="absolute h-full max-w-1/2 hidden lg:block right-0 top-0"
      />
    </div>
  )
}

export default Banner
