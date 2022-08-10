import React from 'react'
import { carData } from '../Data/mapData'
import Map from './MapCar'

const Offers = () => {
    const month=new Date()
  return (
    <>
    <h2 className='header'> Amazing New offers this {month.toLocaleString('default',{month:'long'})}🤩 </h2>
    <p style={{textAlign:'center'}}>Up to 6% discount on these cars</p>
    <Map array={carData.slice(6,12)}/>
    </>
  )
}

export default Offers;