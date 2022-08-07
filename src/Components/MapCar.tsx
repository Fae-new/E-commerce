import React from 'react'
import { Car, Cart } from '../Data/mapData'
// import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import { useDataContext } from '../context';


const Map = ({ array }: { array: Car[] }) => {
    const { data, setData } = useDataContext()

    const handleClick = (e: React.MouseEvent<HTMLParagraphElement>) => {

        if (setData && data) {
            const check = (element: Cart) => element.productId === +(e.target as HTMLParagraphElement).id
            const newArray: Cart[] = data.map((item) => {
                if (item.productId === +(e.target as HTMLParagraphElement).id) item.qty = item.qty + 1
                return item
            })

            setData((prev) => {
                if (prev.some(check)) return newArray
                else { return [...prev, { productId: +(e.target as HTMLParagraphElement).id, qty: 1 }] }
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