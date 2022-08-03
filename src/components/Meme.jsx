import React from 'react'

export default function Input(){
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemes, setAllMemes] = React.useState('')

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=> res.json())
        .then(data=> setAllMemes(data.data.memes))
    }, [])

    function getMemeImage(e) {
        e.preventDefault()
        const index = Math.floor(Math.random() * allMemes.length)
        const memeCalled = allMemes[index].url
        setMeme(prev=> {
            return {
                ...prev,
                randomImage: memeCalled
            }
        })
    }

    function handleChange(event){
        event.preventDefault;
        const {name, value} = event.target;
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