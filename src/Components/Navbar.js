import React from 'react'
import logo from './assets/logo.png'
import translateIcon from './assets/translateIcon.png'
import reviewCart from './assets/reviewCartIcon.png'

function Navbar() {
  return (
    <div className="nav">
<img  className='logoo' src={logo} alt="nidan logo" ></img>
<div className='navItems'>
<p> <img className='icons' src={translateIcon} alt="translateIcon" /> Translate</p>
<p> <img className='icons' src={reviewCart} alt="reviewCart" /> Review Cart</p>
<input className='searchBox' placeholder='Search' type="text" />
</div>
    </div>
  )
}

export default Navbar