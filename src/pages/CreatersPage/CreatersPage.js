import './CreatersPage.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

function CreatersPage() {

const [chrisImage, setChrisImage] = useState(null)
const [matthewImage, setMatthewImage] = useState(null)
const [aarunImage, setAarunImage] = useState(null)

useEffect(()=>{
    axios.get("http://localhost:8080/profiles").then(res =>{console.log(res.data)})
},[])

if(chrisImage === null || matthewImage ===null || aarunImage ===null){
    return <h1>Loading...</h1>
}

    return (
        <>
        <div className='creators-page'> 
            <h1 className='creators-page__title'>Creators</h1>
            <div className='creators-page__person'>
                <image className='creators-page__image' src={chrisImage} />
                <h2 className='creators-page__name'>Chris Lee</h2>
            </div>
            <div className='creators-page__person'>
                <image className='creators-page__image' src={matthewImage} />
                <h2 className='creators-page__name'>Matthew Hawkins</h2>
            </div>
            <div className='creators-page__person'>
                <image className='creators-page__image' src={aarunImage} />
                <h2 className='creators-page__name'>Aarun Jassal</h2>
            </div>
        </div>
       
        </>
    )
}

export default CreatersPage