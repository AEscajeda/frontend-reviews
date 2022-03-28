import React from 'react'
import { useParams } from 'react-router-dom'

import Rating from '../components/Rating'
import ReviewCard from '../components/ReviewCard'

const PlaceScreen = () => {
  const params = useParams()
  const { id } = params
  const reviews = [1, 2]

  const places = [
    {
      id: '1',
      Nombre: 'Titios',
      Categoria: 'Hamburguesas',
      Slogan: 'Vence tu hambre',
      Rango: '$60 - $75',
      Rating: '4.5',
      Descripcion:
        'Somos un restaurante de comida rápida con un ambiente familiar y cálido, desde el año 2000 ofrecemos servicio de restaurante, servicio rápido y servicio a domicilio. Con el trabajo diario y perseverancia nos posicionamos en el gusto y preferencia de nuestros clientes logrando así crecer de una forma significativa desde ampliar los servicios, remodelar el lugar, contratar más personal hasta el poder ofrecer un servicio a domicilio.',
      Direccion: 'C. 25 Sur 1105, La Paz, 72160 Puebla, Pue.',
      Imagen: '/titios.png',
    },
    {
      id: '2',
      Nombre: `Rock n' Wok UPAEP`,
      Categoria: 'Oriental',
      Slogan: `LET’S PUT THINGS STRAIGHT`,
      Rango: '$70 - $85',
      Rating: '4.3',
      Descripcion:
        'Rock n Wok es comida oriental y comida china hecha a nuestra manera, que inicia en el año 2010 con la firme convicción de evolucionar y trabajar para trascender juntos. Durante 10 años Rock & Wok ha buscado ofrecer un modelo de restaurante donde todas las personas están organizadas y aman su trabajo. En todo lo que hacemos, buscamos expresar nuestra personalidad y crear algo que nos haga sentir orgullosos. Queremos crecer y llegar más lejos.',
      Direccion: 'Av. 13 Pte. 2101, Barrio de Santiago, 72410 Puebla, Pue.',
      Imagen: '/rock.jpg',
    },
    {
      id: '3',
      Nombre: `Lemon Tree`,
      Categoria: 'Desayunos',
      Slogan: `Como si estuvieras en tu casa`,
      Rango: '$45 - $60',
      Rating: '4.2',
      Descripcion:
        'La comida de antaño debe degustarse en familia, en ambientes cálidos y hogareños, por eso en Los Almuerzos ofrecemos un servicio personalizado, acogedor, brindado por jóvenes que nos hacen sentir en casa...',
      Direccion:
        'Local B-C, Calle 21 Sur 1110, Barrio de Santiago, 72410 Puebla, Pue.',
      Imagen: '/lemon.jpg',
    },
    {
      id: '4',
      Nombre: `Rico Capricho Desayunos`,
      Categoria: 'Desayunos',
      Slogan: `Date ese capricho que tiene en mente`,
      Rango: '$65 - $90',
      Rating: '4.6',
      Descripcion:
        'Somos una cocina dedicada especialmente a desayunos, nos distinguimos por la calidad de nuestros ingredientes y por consentir y llevar alegría a todos los estudiantes que buscan comer algo diferente y con un toque unico',
      Direccion: 'Av. 13 Pte. 1917, Barrio de Santiago, 72090 Puebla, Pue.',
      Imagen: '/capricho.jpg',
    },
  ]

  const lugar = places.filter((place) => place.id == id)

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={lugar[0]['Imagen']}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {lugar[0]['Categoria']}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {lugar[0]['Nombre']}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <Rating value={lugar[0]['Rating']} color={'#fee568'} />
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
            <p className="leading-relaxed">{lugar[0]['Descripcion']}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3 font-bold text-gray-600">
                  Rango de precios
                </span>
                <span className="mr-3">{lugar[0]['Rango']}</span>
              </div>
            </div>
            <div className="flex">
              <span className="mr-3 font-bold text-gray-600">
                Encuentralos en
              </span>
              <span className="mr-3">{lugar[0]['Direccion']}</span>
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
              4 reviews
            </a>
            {reviews.map((review) => (
              <ReviewCard key={review} review={''} />
            ))}
            <br></br>
            <div class="text-center">
              <button class="inline-block w-full md:w-auto h-full py-4 px-10 leading-8 font-heading font-medium tracking-tighter text-xl text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">
                Ver todas
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default PlaceScreen
