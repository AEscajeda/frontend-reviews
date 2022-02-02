import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import Pagination from '../components/Pagination'

const PlaceCard = () => {
  return (
    <div className="px-2 w-full overflow-hidden my-4 sm:my-2 sm:px-2 sm:w-1/2 md:my-3 md:px-3 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3">
      <Link to="/login">
        <div className="rounded-lg shadow-md  bg-white m-auto p-2 cursor-pointer">
          <img
            src="/lugar.jpg"
            alt="adidas"
            className="p-2 m-auto rounded-2xl"
          />
          <div className="bg-indigo-500 m-3 p-4 rounded-lg">
            <p className="text-white text-xl font-bold ">Nombre del lugar</p>
            <Rating value={4.5} color={'#feee'} />
            <div className="flex items-center justify-between ">
              <p className="text-white">$98.00</p>
              <button
                type="button"
                className="w-10 h-10 text-base font-medium rounded-full text-white bg-indigo-700 hover:bg-indigo-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className="mx-auto"
                  fill="white"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PlaceCard
