import axios from 'axios'

function HomePage() {

    const handleOnClick = () => {
        axios.get("http://localhost:8080/images").then(res => {
            console.log(res.data)
        })
    }

    return (
        <>
        <div className='home-page'>
            <h1 className='home-page__title'>A1-Image</h1>
            <h2 className='home-page__sub-text'> Click the button to generate some awesome AI art</h2>
            <button onClick={handleOnClick} className="home-page__button">get images</button>
            <div className=''>
                //insert the generated photo here
            </div>
        </div>
        </>
    )
}

export default HomePage