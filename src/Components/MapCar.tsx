import React, { useState } from 'react'
import { Car,Cart } from '../Data/mapData'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import { useDataContext } from '../context';


const Map = ({ array }: { array: Car[] }) => {
    const { data, setData } = useDataContext()

    const handleClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
      
        if (setData) {
            const  check=(element:Cart)=>element.productId === +(e.target as HTMLParagraphElement).id
            setData((prev)=>{       
                     if (prev.some(check)) {
            
           
                         const newArray:Cart[] = prev.map((item) => {
                             if (item.productId === +(e.target as HTMLParagraphElement).id)item.qty= item.qty+0.5
                        return item
                         })
                      return newArray
                   }

                   else{ return [...prev, { productId: +(e.target as HTMLParagraphElement).id, qty: 1 }]}

                
                

            })
        }

    }




    localStorage.setItem('cart', JSON.stringify(data))

    return (
        <div>

            {array.map((car) => {
                return (
                    <div key={car.productId} className='carDisplay'>
                        {car.discount ? <div className='discount'>{car.discount}% off</div> : null}
                        <img src={car.imgSrc} alt={car.alt} />
                        <p> <span style={{ fontWeight: 'bold', fontSize: '19px', marginLeft: '10px' }}>{car.name} </span></p>
                        <div className='pricing_info'>
                            <p className='car-btn'>${car.price.toLocaleString()} </p>
                            <p className='details-btn' style={{ display: 'flex' }} onClick={handleClick} id={'' + car.productId} >Add to Cart</p>

                        </div>
                        <p style={{ textAlign: 'center', textDecoration: 'underline', fontWeight: 'bold' }} >View Details</p>

                    </div>)
            })}




        </div>
    )
}

export default Map