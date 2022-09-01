import axios from 'axios'

function HomePage() {

    const handleOnClick = () => {
        axios.get("http://localhost:8080/images").then(res => {
            console.log(res.data)
        })
    }

    return (
        <button onClick={handleOnClick}>get images</button>
    )
}

export default HomePage