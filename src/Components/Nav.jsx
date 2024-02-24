import React from 'react'

const Nav = () => {
  return (
    <div>
 <nav>
    <div className='logo'>
      <img src="/images/brand_logo.png" alt="" />
    </div>
    <ul>
      <li href="#">Menu</li>
      <li href="#">Location</li>
      <li href="#">About</li>
      <li href="#">Contact</li>
    </ul>
    <button>log in</button>
   </nav>
    </div>
  )
}

export default Nav;