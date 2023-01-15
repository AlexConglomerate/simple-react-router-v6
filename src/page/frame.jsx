import React from 'react';
import {Outlet} from "react-router-dom";

function Frame(props) {
    return (
        <div className={'border-2 border-indigo-500/100 w-[500px] p-5 m-5'}>
            <Outlet/>
        </div>
)
}

export default Frame;