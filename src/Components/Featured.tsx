import React from 'react'
import { carData } from '../Data/mapData'
import Map from './MapCar'
const Featured = () => {
  return (
   <>
   <h1 className='header'>Featured products</h1>
<Map array={carData.slice(0,6)}/>
   </>
  )
}

export default Featured