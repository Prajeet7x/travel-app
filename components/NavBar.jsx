import React from 'react'
import globeIcon from '../public/images/globe-icon.png'

function NavBar() {
    return (
        <header>
            <nav className='nav-bar'>
                <img src={globeIcon} alt="" />
                <p className='nav-bar-text'>my travel journal.</p>
            </nav>
        </header>
    )
}

export default NavBar