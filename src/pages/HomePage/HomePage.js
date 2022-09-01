import axios from 'axios'
import { useState, useEffect } from 'react'

function HomePage() {

    const [randomImage, setRandomImage] = useState(null)

    let num = Math.floor(Math.random()*18)

    const handleOnClick = () => {
        axios.get("http://localhost:8080/images").then(res =>{
            setRandomImage(res.data[num].image)
            console.log(num)
        })
    }

    return (
        <>
        <div className='home-page'>
            <h1 className='home-page__title'>A1-Image</h1>
            <h2 className='home-page__sub-text'> Click the button to generate some awesome AI art</h2>
            <button onClick={handleOnClick} className="home-page__button">get images</button>
            <div className='home-page__image'>
                <img src={randomImage} />
            </div>
        </div>
        </>
    )
}

export default HomePage