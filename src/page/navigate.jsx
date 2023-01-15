import React from 'react';
import {useNavigate} from "react-router-dom";

/*
* можем ли вернуться на предыдущую страницу после переадресации?
* с push можем (стоит по умолчанию в реакт роут 6)
* с replace не можем
* */
function Navigate(props) {
    const navigate = useNavigate()
    navigate('color/red', {replace: true})
    return (
        <div>
            <button className="btn btn-blue">
                Назад
            </button>
        </div>
    );
}

export default Navigate;