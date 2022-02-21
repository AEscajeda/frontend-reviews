import React from 'react'
import Banner from '../components/Banner'
import Pagination from '../components/Pagination'
import PlaceCard from '../components/PlaceCard'

const Places = () => {
  const lugares = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div>
      <Banner />
      <br></br>
      <div className="grid grid-cols-1 p-2 lg:p-12 md:grid-cols-2 xl:grid-cols-5 gap-12 bg-gray-200">
        {lugares.map((el) => (
          <PlaceCard id={el} />
        ))}
      </div>
      <br></br>
      <Pagination />
    </div>
  )
}

export default Places
