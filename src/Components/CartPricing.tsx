import React from 'react'
import { useDataContext } from '../context'

const CartPricing = () => {
const {data}= useDataContext()

    const goodsPrice = data?.map(item => item.qty * item.price).reduce((prev, current) => prev + current, 0)
    let Total
    if (goodsPrice) { Total = goodsPrice + 800 }
  return (
    <>
    <div className='total'>
    <p >Subtotal</p>
    <p> <span style={{ fontWeight: 'bold' }}>
        ${goodsPrice?.toLocaleString()}
    </span></p>

</div>

<div style={{ borderBottom: '1px solid black' }} className='total'>
    <p>Shipping</p>
    <p> <span style={{ fontWeight: 'bold' }}>$800 </span></p>
</div>

<div className='total'>
    <p style={{ fontWeight: 'bold' }}>Total</p>
    <p style={{ fontWeight: 'bold' }}>${Total?.toLocaleString()} </p>

</div>

<div className='checkout-btn'><h4 >Place Order</h4></div>
</>
  )
}

export default CartPricing