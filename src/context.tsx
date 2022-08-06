import React,{useContext,useState}from 'react'

import { Cart } from './Data/mapData'


const dataContext= React.createContext<{ data: Cart[]|null; setData: React.Dispatch<React.SetStateAction<Cart[]>>|null}>({data:null,setData:null})

export const useDataContext = () => {
    return useContext(dataContext)
}

export const DataProvider =({children}:{children:React.ReactNode})=>{
const cart= JSON.parse( localStorage.getItem('cart')||'[]')

    const [data,setData]=useState(cart)
    return(
       <dataContext.Provider value={{data,setData}}>
        {children}
       </dataContext.Provider>
    )
}