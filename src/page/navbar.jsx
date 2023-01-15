import React from 'react';
import {NavLink} from "react-router-dom";

function Navbar({isLoggedIn}) {

    const createClass = ({isActive}) => isActive ? 'text-fuchsia-700 mx-2' : "text-white mx-2"

    return (
        <nav className="bg-gray-800">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <NavLink to="#" className="text-white font-medium">
                    {isLoggedIn ? '👨' : '👤'}
                </NavLink>
                <div className="flex items-center">


                    <NavLink to="/redirect" className={createClass} end>
                        redirect
                    </NavLink>


                    <NavLink to="/color/red" className={createClass} end>
                        🟢 /color/red
                    </NavLink>
                    <NavLink to="/color/blue" className={createClass} end>
                        /color/blue
                    </NavLink>
                    {/*================================*/}
                    <NavLink to="/frame" className={createClass} end>
                        🟢 frame
                    </NavLink>
                    <NavLink to="/frame/red" className={createClass} end>
                        /frame/red
                    </NavLink>
                    <NavLink to="/frame/blue" className={createClass} end>
                        /frame/blue
                    </NavLink>
                    <NavLink to="/frame/new" className={createClass} end>
                        /frame/new
                    </NavLink>
                    {/*========================================*/}
                    <NavLink to="/post" className={createClass} end>
                        🟢 post
                    </NavLink>
                    <NavLink to="/post/123" className={createClass} end>
                        /post/123
                    </NavLink>
                    <NavLink to="/post/678" className={createClass} end>
                        /post/678
                    </NavLink>
                    {/*========================================*/}
                    <NavLink to="/auth" className={createClass} end>
                        🟢 /auth
                    </NavLink>
                    <NavLink to="/admin" className={createClass} end>
                        /admin
                    </NavLink>
                    <NavLink to="/admin/secret" className={createClass} end>
                        /admin/secret
                    </NavLink>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;