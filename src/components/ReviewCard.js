import React from 'react'

import Rating from './Rating'

const ReviewCard = ({ review }) => {
  return (
    <div class="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
      <div class="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
        <div class="flex flex-wrap items-center">
          <img
            class="mr-6"
            src="uinel-assets/images/ecommerce-reviews/user.png"
            alt=""
          />
          <h4 class="w-full md:w-auto text-xl font-heading font-medium">
            {review.Nombre}
          </h4>
          <div class="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
          <span class="mr-4 text-xl font-heading font-medium">
            {review.Calificacion}
          </span>
          <div class="inline-flex">
            <Rating value={review.Calificacion} color={'#fee568'} />
          </div>
        </div>
      </div>
      <div class="px-4 overflow-hidden md:px-16 pt-8 pb-4 bg-white">
        <div class="flex flex-wrap">
          <div class="w-full md:w-2/3 mb-6 md:mb-0">
            <p class="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">
              {review.Review}
            </p>
          </div>
          <div class="w-full md:w-1/3 text-right">
            <p class="mb-8 text-sm text-gray-300">{review.Fecha}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
