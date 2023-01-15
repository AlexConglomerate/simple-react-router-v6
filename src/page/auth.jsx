import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";

function Auth() {
    const location = useLocation()
    const navigate = useNavigate()
    const btnClass = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-3"
    const lastPage = location.state?.referrer.pathname
    const navFunc = () => navigate(lastPage)

    return (
        <div>
            <h1>
                Страница авторизации
            </h1>
            Вы пришли со страницы: {lastPage || '[страница неизвестна, (вы зашли в ручную). И поэтому кнопка не работает]'}
            <br/>
            Когда пройдёте авторизацию (т.е. в файле App2.jsx вы сделаете isLogged = true),
            <button
                className={btnClass}
                onClick={navFunc}
            >
                я сделаю так
            </button>.
            Т.е. верну вас на исходную страницу.
        </div>
    );
}

export default Auth;