import React, { useState } from 'react'

const Header = () => {
    const [navStatus,setNavStatus]=useState(false)
    
    const handleClick=()=>{setNavStatus(!navStatus)}
    return (
        <nav>
            
                <h2>Cars</h2>
                <div className={navStatus?'navItems-active':'navItems'}>
                <p> Homepage</p>
                <p> About us</p>
                <p> News</p>
                <p> Categories</p>
                <p>Contact us</p>
                </div>
                {/* {navStatus?<p onClick={handleClick} >close</p>:
                <p onClick={handleClick}>ham</p>} */}
                <div className={navStatus?'ham-active':'ham'} onClick={handleClick}>
                    <div className={navStatus?'hamBar1-active':'hamBar1'}></div>
                    <div className={navStatus?'hamBar2-active':'hamBar2'} ></div>
                    </div>
         
        </nav>
    )
}

export default Header