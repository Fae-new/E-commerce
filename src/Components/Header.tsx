import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDataContext } from '../context';
import {Link} from 'react-router-dom'


const Header = () => {
    const [navStatus, setNavStatus] = useState(false)
    const { data } = useDataContext()
    const handleClick = () => { setNavStatus(!navStatus) }
    const qty: number | undefined = data?.map(item => +item.qty).reduce((prev, current) => prev + current, 0)

    return (
        <>
            <nav>
                <h2 className='logo'>Cars</h2>
                <div style={{ display: 'flex', textAlign: 'center' }} >
                    <div className='navItems' style={{left:navStatus?'0':'-100%'}}>
                       <Link to='/'>  <p> Homepage</p></Link>
                        <p> About us</p>
                        <p> Categories</p>
                        <p style={{ outline: '1px solid #ffffff', borderRadius: '5px', color: '#41ead4' }}>Log In</p>
                    </div>
                    <div className='carticon'> <Link to='/cart'> <ShoppingCartIcon sx={{color:'white'}}/> </Link> <p className='cartNo'>{qty}</p>  </div>
                    <div className='ham' onClick={handleClick}>
                        <div className='hamBar' style={{ marginBottom:navStatus?'':'10px',transform:navStatus?'rotate(45deg)':''}}></div>
                        <div className='hamBar'  style={{ transform:navStatus?'rotate(-45deg)':''}}></div>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Header