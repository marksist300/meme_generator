import React from 'react'
import memes from "../memeData"

export default function Input(){
    const [meme, setMeme] = React.useState("http://i.imgflip.com/1bij.jpg")

    function getMemeImage() {
        const memesArray = memes.data.memes
        const index = Math.floor(Math.random() * memesArray.length)
        setMeme(memesArray[index].url)
    }

    return (
        <section className='input-container'>
            <form  action="">
                <div className='input-fields'>
                    <input className='text-box' type="text" placeholder='Text for top of image'/>
                    <input className='text-box' type="text" placeholder='Text for bottom of image' />
                </div>
                <div className='btn-section'>
                <button className='generate-meme-btn'>Get A New Image</button>
                </div>
            </form>
            <div className='photo-container'>
                <img className='memePhoto' src={meme} alt="Photo goes here" />
            </div>
        </section>
    )
}