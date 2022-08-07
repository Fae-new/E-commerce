import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDataContext } from '../context';
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
                        <p> Homepage</p>
                        <p> About us</p>
                        <p> Categories</p>
                        <p style={{ outline: '1px solid #ffffff', borderRadius: '5px', color: '#41ead4' }}>Contact us</p>
                    </div>
                    <div><ShoppingCartIcon /> <p className='cartNo'>{qty}</p></div>
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