import React,{useContext,useState}from 'react'

import { Car } from './Data/mapData'


const dataContext= React.createContext<{ data: Car[]|null; setData: React.Dispatch<React.SetStateAction<Car[]>>|null}>({data:null,setData:null})

export const useDataContext = () => {
    return useContext(dataContext)
}

export const DataProvider =({children}:{children:React.ReactNode})=>{
const cart= JSON.parse( localStorage.getItem('cart')||'[]')

    const [data,setData]=useState<Car[]>(cart)
    return(
       <dataContext.Provider value={{data,setData}}>
        {children}
       </dataContext.Provider>
    )
}