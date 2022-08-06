import React from 'react'

const Footer = () => {
    const year=new Date().getFullYear()
  return (
    <footer>
        <div  className='footerDiv'>
            <h2 className='logo'>Cars</h2>
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>

        <p style={{fontSize:'13px',textAlign:'center'}}>Copyright {year}. </p>
    </footer>
  )
}

export default Footer