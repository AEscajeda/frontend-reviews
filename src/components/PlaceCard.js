import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'

const PlaceCard = ({ id }) => {
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
      Direccion: '9 poniente #2512, Puebla',
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
    <Link to={`/lugar/${id}`}>
      <div class="overflow-hidden shadow-lg rounded-lg h-90 w-96 md:w-80 cursor-pointer m-auto w content-center">
        <img
          alt="blog photo"
          src={lugar[0]['Imagen']}
          class="max-h-40 w-full object-cover"
        />
        <div class="bg-white dark:bg-gray-800 w-full p-4">
          <p class="text-indigo-500 text-md font-medium">
            {lugar[0]['Categoria']}
          </p>
          <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
            {lugar[0]['Nombre']}
          </p>
          <Rating value={lugar[0]['Rating']} color={'#fee568'} />
          <p class="text-gray-400 dark:text-gray-300 font-light text-md">
            {lugar[0]['Slogan']}
          </p>
          <div class="flex items-center mt-4">
            <div class="flex flex-col justify-between text-sm">
              <p class="text-gray-800 dark:text-white">Rango de precios</p>
              <p class="text-gray-400 dark:text-gray-300">
                {lugar[0]['Rango']}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PlaceCard
