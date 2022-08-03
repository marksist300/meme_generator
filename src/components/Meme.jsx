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

    function handleChange(event){
        event.preventDefault;
        const {name, value} = event.target;
        console.log(name, value)
        setMeme(prev=> {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <section className='input-container'>
            <form  action="">
                <div className='input-fields'>
                    <input name="topText" value={meme.topText} onChange={handleChange} className='text-box' type="text" placeholder='Text for top'/>
                    <input name="bottomText" value={meme.bottomText} onChange={handleChange} className='text-box' type="text" placeholder='Text for bottom' />
                </div>
                <div className='btn-section'>
                <button onClick={getMemeImage} className='generate-meme-btn'>Get A New Image</button>
                </div>
            </form>
            <div className='photo-container'>
                <img className='memePhoto' src={meme.randomImage} alt="Photo goes here" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </section>
    )
}