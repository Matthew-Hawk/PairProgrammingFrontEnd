import "./Header.scss"

import {Link} from 'react-router-dom'

function Header (){

    return(
        <>
            <div className="header"> 
                <image className="header__logo" src="#" alt="logo"/>
                <nav className="header__nav">
                    <Link className="header__link" to="/">Home</Link>
                    <Link className="header__link" to="/creaters">Creators</Link>
                </nav>
                <div className="header__copy">
                    <p className="header__copy-text"> est.2022 @ BrainStation</p>
                </div>
            </div>
        </>
    )
}
export default Header