import React from 'react'
import { carData, Car } from '../Data/mapData'
import { useDataContext } from '../context'

const Cart = () => {
    const { data, setData } = useDataContext()
    const goodsPrice = data?.map(item => item.qty * item.price).reduce((prev, current) => prev + current, 0)

    let Total
    if (goodsPrice) { Total = goodsPrice + 800 }

    const handleClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
        const check = (element: Car) => element.productId === +(e.target as HTMLParagraphElement).id && element.qty >=1
        if (setData && data) {

            const newArray: Car[] = data.map((item) => {
                if (item.productId === +(e.target as HTMLParagraphElement).id) item.qty = item.qty - 1
                return item
            })


            setData((prev) => {
                if (prev.some(check)) return newArray
                else {
                    return (prev.filter((item) => { return item.productId != +(e.target as HTMLParagraphElement).id }))

                }
            })
        }

    }

    localStorage.setItem('cart', JSON.stringify(data))



    return (
        data?.length === 0 ?
            <div>
                <h3 style={{ textAlign: 'center' }}>No items in cart yet</h3>

            </div> :

            <div>
                {data?.map((item) => {
                    return (<div className='cart'>
                        <img src={item.imgSrc} alt="" />
                        <div>
                            <h4>{item.name}</h4>
                            <p><span style={{ fontWeight: 'bold' }}> ${item.price.toLocaleString()}</span> x {item.qty}</p>
                        </div>

                        <p className='remove-btn' id={'' + item.productId} onClick={handleClick}>Delete</p>

                    </div>)
                })}
                <br />
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

            </div>

    )
}

export default Cart