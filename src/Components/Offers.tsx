import React from 'react'
import { offersData } from '../Data/mapData'
import Map from './MapCar'

const Offers = () => {
    const month=new Date()
  return (
    <>
    <h2> Amazing offers this {month.toLocaleString('default',{month:'long'})}🤩 </h2>
    <p style={{marginLeft:'10px'}}>Up to 6% discount on these cars</p>
    <Map array={offersData}/>
    </>
  )
}

export default Offers