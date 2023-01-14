import React from 'react';
import {Outlet} from "react-router-dom";

function Frame(props) {
    return (
        <div className={'border-2 border-indigo-500/100 w-min'}>
            <Outlet/>
        </div>
)
}

export default Frame;