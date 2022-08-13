import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className='footerDiv'>
        <h2 className='logo'>Cars</h2>
        <div >
          <FacebookIcon />
          <TwitterIcon />
        </div>
      </div>

      <p style={{ fontSize: '13px', textAlign: 'center' }}>Copyright {year}. </p>
    </footer>
  )
}

export default Footer