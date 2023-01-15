import React from 'react';
import {Outlet} from "react-router-dom";

function AdminLayout(props) {
    return (
            <div className={'border-2 border-green-600 w-[500px] p-5 m-5'}>
                <Outlet/>
            </div>
    );
}

export default AdminLayout;