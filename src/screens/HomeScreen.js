import React from 'react'

import Banner from '../components/Banner'
import Newsletter from '../components/Newsletter'

const HomeScreen = () => {
  const iter = [1, 2, 3, 4, 5]
  return (
    <div>
      <Banner />
      <Newsletter />
    </div>
  )
}

export default HomeScreen
