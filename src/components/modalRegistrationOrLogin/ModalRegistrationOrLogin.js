import { useState } from 'react';

import './modalRegistrationOrLogin.css';

import Login from '../login/Login';
import Registration from '../registration/Registration';

function ModalRegistrationOrLogin({active, setActive}) {
    const [activeBtn, setActiveBtn] = useState('login');

    return(
        <div className={active? 'modal' : 'hide'}  onMouseDown={() => setActive(false)}>
            <div className="modal__content" onMouseDown={(e) => e.stopPropagation()}>
                <div className="modal__btn-wraper">
                    <button onClick={() => setActiveBtn('login')} className={(activeBtn === 'login' ? 'modal__btn_active': '') + " modal__btn"}>Вход</button>
                    <button onClick={() => setActiveBtn('registration')} className={(activeBtn === 'registration' ? 'modal__btn_active': '') + " modal__btn"}>Регистрация</button>
                </div>
                {activeBtn === 'login' ? <Login/> : <Registration/>}
            </div>
            
        </div>
    )
}

export default ModalRegistrationOrLogin;