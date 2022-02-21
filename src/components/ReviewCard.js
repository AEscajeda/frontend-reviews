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
            Jonh Snow
          </h4>
          <div class="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
          <span class="mr-4 text-xl font-heading font-medium">5.0</span>
          <div class="inline-flex">
            <Rating value={5} color={'#fee568'} />
          </div>
        </div>
      </div>
      <div class="px-4 overflow-hidden md:px-16 pt-8 pb-12 bg-white">
        <div class="flex flex-wrap">
          <div class="w-full md:w-2/3 mb-6 md:mb-0">
            <p class="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">
              Buen lugar, atienden rápido y por lo general no se acumula mucha
              gente.
            </p>
            <div class="-mb-2">
              <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg
                      width="11"
                      height="11"
                      viewbox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <span class="text-green-500 font-heading font-medium">
                    Sabor
                  </span>
                </div>
              </div>
              <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg
                      width="11"
                      height="11"
                      viewbox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <span class="text-green-500 font-heading font-medium">
                    Precio
                  </span>
                </div>
              </div>
              <div class="inline-flex w-full md:w-auto mb-2">
                <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg
                      width="11"
                      height="11"
                      viewbox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <span class="text-green-500 font-heading font-medium">
                    Velocidad
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 text-right">
            <p class="mb-8 text-sm text-gray-300">Hace 3 dias</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
