import React from 'react'
import { carData } from '../Data/mapData'
import Map from './MapCar'
const Featured = () => {
  return (
   <>
   <h2 className='header'>Featured products</h2>
<Map array={carData.slice(0,8)}/>
   </>
  )
}

export default Featured