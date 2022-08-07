import React from 'react'
import {carData} from '../Data/mapData'
import { useDataContext } from '../context'

const Cart = () => {
const {data}=useDataContext()

  const cartfilter= data?.map((item)=>{
    return item.productId
  })
 
const carDatafilter= carData.filter((item)=>{
    return cartfilter?.includes(item.productId)
})



console.log(carDatafilter);


  return (
    <div>cart</div>
  )
}

export default Cart