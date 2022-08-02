import React from 'react'
import { featuredData } from '../Data/mapData'
import Map from './MapCar'
const Featured = () => {
  return (
   <>
   <h2>Featured products</h2>
<Map array={featuredData}/>
   </>
  )
}

export default Featured