import React from 'react'
import { categories } from '../Data/mapData'
const Categories = () => {
    return (
        <>
            <h1 style={{ marginTop: '100px' }} className='header'>Check out our product categories</h1>


            <div className='categoriesDiv'>
                {categories.map((category, index) => {
                    return (<div className='category' key={index}>
                        <h2>{category.name}</h2>
                        <p>{category.descrption}</p>
                        <h3 className='categoryBtn'>Learn more</h3>
                    </div>)

                })}
            </div>

        </>
    )
}

export default Categories