import React from 'react'
import { Car} from '../Data/mapData'
import {carData} from '../Data/mapData'


import { useDataContext } from '../context';


const Map = ({ array }: { array: Car[] }) => {
    const { data, setData } = useDataContext()

    const handleClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
        const check = (element: Car) => element.productId === +(e.target as HTMLParagraphElement).id+1
        if (setData && data) {
          
            const newArray: Car[] = data.map((item) => {
                if (item.productId === +(e.target as HTMLParagraphElement).id+1) item.qty = item.qty + 1
                return item
            })


            setData((prev) => {
                if (prev.some(check)) return newArray
                else { return [...prev, carData[+(e.target as HTMLParagraphElement).id]] }
            })
        }

    }

    localStorage.setItem('cart', JSON.stringify(data))
    console.log(data);
    

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
                            <p className='details-btn' style={{ display: 'flex' }} onClick={handleClick} id={(car.productId-1)+''} >Add to Cart</p>

                        </div>
                        <p style={{ textAlign: 'center', textDecoration: 'underline', fontWeight: 'bold' }} >View Details</p>

                    </div>)
            })}




        </div>
    )
}

export default Map