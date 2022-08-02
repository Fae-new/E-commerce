import React from 'react'
import { categories } from '../Data/mapData'
const Categories = () => {
    return (
        <div className='categoriesDiv'>
            <h1>Check out our product categories</h1>
            <div>
                {categories.map((category,index) => {
                    return (<div className='category' key={index}>
<h1>{category.name}</h1>
<p>{category.descrption}</p>
<p className='categoryBtn'>Learn more</p>
                    </div>)

                })}
            </div>
        </div>
    )
}

export default Categories