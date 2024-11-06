import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quia eius excepturi nemo illum veniam exercitationem! Mollitia obcaecati excepturi, blanditiis nobis dolore ipsum illum sit laboriosam, eveniet aspernatur, alias itaque.
        </p>
        <a href='#explore-menu'><button>View Menu</button></a>
      </div>
    </div>
  )
}

export default Header
