import React from 'react'
import {Car } from '../Data/mapData'
import { useDataContext } from '../context'
import CartPricing from '../Components/CartPricing'
import {Link} from 'react-router-dom'


import {ArrowBackIos} from '@mui/icons-material';

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
                    return (prev.filter((item) => { return item.productId !== +(e.target as HTMLParagraphElement).id }))
                }
            })
        }

    }

    localStorage.setItem('cart', JSON.stringify(data))



    return (
        data?.length === 0 ?
            <div className='cartHeader' >
  <Link to='/'><ArrowBackIos className='back' /></Link> 
                <h3>No items in cart yet</h3>
                <img src={require('../Cars/empty-cart.png')} alt="" />
              
            </div> :

            <div>
                <div  className='cartHeader'>

      <Link to='/'><ArrowBackIos className='back' /></Link> 
                <h3>Cart</h3>
                </div>
                
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