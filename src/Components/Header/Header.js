import "./Header.scss"

import {Link} from 'react-router-dom'

function Header (){

    return(
        <>
            <div className="header"> 
                <image className="header__logo" src="#" alt="logo"/>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/creaters">Creators</Link>
                </nav>
                <div className="header__copy">
                    <p className="header__copy-text"> est.2022 @ BrainStation</p>
                </div>
            </div>
        </>
    )
}
export default Header