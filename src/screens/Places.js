import React from 'react'
import Banner from '../components/Banner'
import Pagination from '../components/Pagination'
import PlaceCard from '../components/PlaceCard'

const Places = () => {
  const lugares = [1, 2, 3, 4, 5]
  return (
    <div>
      <Banner />
      <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-3 lg:-mx-4 xl:-mx-4 p-6 lg:p-20 bg-gray-50">
        {lugares.map((el) => (
          <PlaceCard />
        ))}
      </div>
      <Pagination />
    </div>
  )
}

export default Places
