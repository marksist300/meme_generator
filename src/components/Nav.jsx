import React from 'react'
import trollFace from '../assets/trollFace.svg'
export default function Nav (props) {
    const {toggleDarkMode, darkModeActive} = props
    return (
        <header>
            <nav className='nav-bar'>
                <div className='title-nav'>
                <img src={trollFace} alt="Distorted face of a troll, twisted to the right, a simple drawing" />
                <h1>Meme Generator</h1>
                </div>

                <div className="toggler">
                    <p className="toggler-light">Light</p>
                    <div onClick={toggleDarkMode} className={darkModeActive? 'toggler-slider-dark' : 'toggler-slider-light'}>
                        <div className={darkModeActive ? 'toggler-slider-circle-dark' : 'toggler-slider-circle-light'}></div>
                    </div>
                    <p className="toggler-dark">Dark</p>
                </div>
            </nav>
        </header>
    )
}