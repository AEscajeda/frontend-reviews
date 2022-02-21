import React from 'react'
import { useParams } from 'react-router-dom'

import Rating from '../components/Rating'
import ReviewCard from '../components/ReviewCard'

const PlaceScreen = () => {
  const params = useParams()
  const { id } = params
  const reviews = [1, 2, 3]

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Sushi
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              Nombre del lugar
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <Rating value={4.5} color={'#fee568'} />
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed">
              Icono de la cultura mexicana se le conoce como la catedral de{' '}
              <i class="fa-solid fa-bowl-hot"></i>
              mariachi. Abierto desde 1925 ha sido parte de la historia de la
              música mexicana; adornado con murales que recuerdan a los grandes
              compositores y artistas los cuales invitan a vivir un recorrido
              por la historia. Su cocina típica mexicana adorna la experiencia
              de un símbolo de México. La experiencia gastronómica de este sitio
              plasma con cada platillo sabores que distinguen a nuestra cultura.
              La birria platillo típico de jalisco es nuestro platillo
              tradicional, además de complementar la experiencia con antojitos
              mexicanos y una parrilla imperdible. El restaurante tiene acceso a
              menores de edad.
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3 font-bold text-gray-600">
                  Rango de precios
                </span>
                <span className="mr-3">$60 - $70</span>
              </div>
            </div>
            <div className="flex">
              <span className="mr-3 font-bold text-gray-600">
                Encuentralos en
              </span>
              <span className="mr-3">
                23 sur #1678 C.P. 72160 Barrio de Santiago, Puebla
              </span>
            </div>
          </div>
        </div>
        {/* Reviews section */}
        <section class="py-24 2xl:py-44 bg-blueGray-100 rounded-t-10xl overflow-hidden">
          <div class="container px-4 mx-auto">
            <span class="text-md text-gray-500 uppercase tracking-wide">
              Lo que comentan los estudiantes
            </span>
            <div class="flex flex-wrap -mx-2 mb-14"></div>
            <a
              class="inline-block mb-14 text-3xl font-heading font-medium underline hover:text-darkBlueGray-700"
              href="#"
            >
              18 reviews
            </a>
            {reviews.map((review) => (
              <ReviewCard key={review} review={''} />
            ))}
            <br></br>
            <div class="text-center">
              <button class="inline-block w-full md:w-auto h-full py-4 px-10 leading-8 font-heading font-medium tracking-tighter text-xl text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">
                See all
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default PlaceScreen
