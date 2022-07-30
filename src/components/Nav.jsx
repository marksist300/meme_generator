import React from 'react'
import trollFace from '../assets/trollFace.svg'
export default function Nav () {
    return (
        <header>
            <nav className='nav-bar'>
                <img src={trollFace} alt="Distorted face of a troll, twisted to the right, a simple drawing" />
                <h1>Meme Generator</h1>
            </nav>
        </header>
    )
}