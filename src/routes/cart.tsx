import React from 'react'
import { carData, Car } from '../Data/mapData'
import { useDataContext } from '../context'
import CartPricing from '../Components/CartPricing'

const Cart = () => {
    const { data, setData } = useDataContext()
  

    const handleClick = (e: React.MouseEvent<HTMLParagraphElement>) => {


        const check = (element: Car) => element.productId === +(e.target as HTMLParagraphElement).id && element.qty >= 2
        if (setData && data) {

            let newArray: Car[]

            if (data.some(check)) {
                newArray = data.map((item) => {
                    if (item.productId === +(e.target as HTMLParagraphElement).id) item.qty = item.qty - 1
                    return item
                })
            }


            setData((prev) => {
                if (newArray) { return newArray }
                else {
                    return (prev.filter((item) => { return item.productId != +(e.target as HTMLParagraphElement).id }))
                }
            })
        }

    }

    localStorage.setItem('cart', JSON.stringify(data))



    return (
        data?.length === 0 ?
            <div style={{marginTop:'100px'}}>
                <h3 style={{ textAlign: 'center' }}>No items in cart yet</h3>

            </div> :

            <div>
                <h3 style={{marginTop: '100px',textAlign:'center'}}>Cart</h3>
                {data?.map((item, index) => {
                    return (<div key={index} className='cart'>
                        <img src={item.imgSrc} alt="" />
                        <div>
                            <h4>{item.name}</h4>
                            <p><span style={{ fontWeight: 'bold' }}> ${item.price.toLocaleString()}</span> x {item.qty}</p>
                        </div>

                        <p className='remove-btn' id={'' + item.productId} onClick={handleClick}>Remove</p>

                    </div>)
                })}
                <br />
               <CartPricing/>

            </div>

    )
}

export default Cart