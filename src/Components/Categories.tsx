import React from 'react'
import { categories } from '../Data/mapData'
const Categories = () => {
    return (
        <div className='categoriesDiv'>
            <h1>Check out our product categories</h1>
            <div>
                {categories.map((category, index) => {
                    return (<div className='category' key={index}>
                        <h2>{category.name}</h2>
                        <p>{category.descrption}</p>
                        <h3 className='categoryBtn'>Learn more</h3>
                    </div>)

                })}
            </div>
        </div>
    )
}

export default Categories