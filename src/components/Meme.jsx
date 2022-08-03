import React from 'react'
import memes from "../memeData"

export default function Input(){
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const allMemeImages = React.useState(memes)

    function getMemeImage(e) {
        e.preventDefault()
        const memesArray = allMemeImages[0].data.memes
        const index = Math.floor(Math.random() * memesArray.length)
        const memeCalled = memesArray[index].url
        setMeme(prev=> {
            return {
                ...prev,
                randomImage: memeCalled
            }
        })
        console.log(meme)
    }

    return (
        <section className='input-container'>
            <form  action="">
                <div className='input-fields'>
                    <input className='text-box' type="text" placeholder='Text for top of image'/>
                    <input className='text-box' type="text" placeholder='Text for bottom of image' />
                </div>
                <div className='btn-section'>
                <button onClick={getMemeImage} className='generate-meme-btn'>Get A New Image</button>
                </div>
            </form>
            <div className='photo-container'>
                <img className='memePhoto' src={meme.randomImage} alt="Photo goes here" />
                <h2 className="meme--text top">One does not simply</h2>
                <h2 className="meme--text bottom">Walk into Mordor</h2>
            </div>
        </section>
    )
}