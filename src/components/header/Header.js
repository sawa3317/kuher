import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './header.css'

import logo from './img/logo.png';
import ModalRegistrationOrLogin from '../modalRegistrationOrLogin/ModalRegistrationOrLogin';

function Header() {
    const [modalActive, setModalActive] = useState(false);

    return(
        <div className="container">
            <header className="header">
                <div className="header__wraper">
                    <div className="header__logo"><Link to="/"><img src={logo} alt="logo"/></Link></div>
                    <nav className='header__nav'>
                        <NavLink to="/new" className="header__link">ПОДАТЬ ОБЪЯВЛЕНИЕ</NavLink>
                        <a href="#" className="header__link">МОИ ОБЪЯВЛЕНИЯ</a>
                        <a onClick={() => setModalActive(true)} href="#" className="header__link">ПОИСК ОБЪЯВЛЕНИЙ</a>
                    </nav>
                </div>
            </header>
            <ModalRegistrationOrLogin active={modalActive} setActive={setModalActive}/>
        </div>
        
    )
}

export default Header;