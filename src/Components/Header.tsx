import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDataContext } from '../context';
const Header = () => {
    const [navStatus,setNavStatus]=useState(false)
    const {data}=useDataContext()
    const handleClick=()=>{setNavStatus(!navStatus)}
    return (
        <>
        <nav>
            
                <h2 className='logo'>Cars</h2>

               <div style={{display:'flex',textAlign:'center'}} >
             <div><ShoppingCartIcon/> <p className='cartNo'>{data?.length}</p></div>
                <div className={navStatus?'ham-active':'ham'} onClick={handleClick}>
                    <div className={navStatus?'hamBar1-active':'hamBar1'}></div>
                    <div className={navStatus?'hamBar2-active':'hamBar2'} ></div>
                    </div>
                    </div>
         
        </nav>
         <div className={navStatus?'navItems-active':'navItems'}>
         <p> Homepage</p>
         <p> About us</p>
         <p> Categories</p>
         <p style={{outline:'1px solid #ffffff',borderRadius: '5px',color: '#41ead4'}}>Contact us</p>
         </div>
        
         </>
    )
}

export default Header