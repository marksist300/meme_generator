import React from 'react'

export default function Input(){
    return (
        <section className='input-container'>
            <form  action="">
                <div className='input-fields'>
                    <input className='text-box' type="text" placeholder='Text for top of image'/>
                    <input className='text-box' type="text" placeholder='Text for bottom of image' />
                </div>
                <div className='btn-section'>
                <button type='submit' className='generate-meme-btn'>Get A New Image</button>
                </div>
            </form>
        </section>
    )
}