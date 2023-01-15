import React from 'react';
import {Navigate, useLocation} from "react-router-dom";

const ProtectedRoute = ({redirectTo, element}) => {
    const location = useLocation()
    const isLogged = true
    // const isLogged = false
    console.log(location)
    if (!isLogged) {
        return <Navigate
            to={redirectTo}
            state={{referrer: location}}
            // обращаемся к объекту state, и добавляем туда свою информацию
            // Эту информацию мы сможем достать на новой странице через const location = useLocation()
            // И таким образом получится перейти на ту страницу, на которой был
        />
    }
    return element

}

export default ProtectedRoute;