import React from 'react'
import { Car } from '../Data/mapData'

const Map = ({ array }: { array: Car[] }) => {
    return (
        <div>

            {array.map((car) => {
                return (
                    <div key={car.productId} className='carDisplay'>
                         {car.discount? <div className='discount'>{car.discount}% off</div>:null }
                        <img src={car.imgSrc} alt={car.alt} />
                        <p> <span style={{fontWeight:'bold'}}>{car.name} </span></p>
                        <div className='pricing_info'>
                            <p><span style={{fontWeight:'bold'}}>Price: </span> ${car.price.toLocaleString()} </p>
                            <p className='car-btn'>Add to Cart</p>
                           
                        </div>


                    </div>)
            })}




        </div>
    )
}

export default Map