import React from 'react';

function Navbar(isLoggedIn) {


    return (
        <nav className="bg-gray-800">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <a href="#" className="text-white font-medium">
                    {isLoggedIn ? '👨' : '👤'}
                </a>
                <div className="flex items-center">

                    <a href="/redirect" className="text-white mr-4">
                        redirect
                    </a>

                    <a href="/color/red" className="text-white mr-4">
                        🟢 /color/red
                    </a>
                    <a href="/color/blue" className="text-white mr-4">
                        /color/blue
                    </a>
                    {/*================================*/}
                    <a href="/frame" className="text-white mr-4">
                        🟢 frame
                    </a>
                    <a href="/frame/red" className="text-white mr-4">
                        /frame/red
                    </a>
                    <a href="/frame/blue" className="text-white mr-4">
                        /frame/blue
                    </a>
                    <a href="/frame/new" className="text-white mr-4">
                        /frame/new
                    </a>
                    {/*========================================*/}
                    <a href="/post" className="text-white mr-4">
                        🟢 post
                    </a>
                    <a href="/post/123" className="text-white mr-4">
                        /post/123
                    </a>
                    <a href="/post/678" className="text-white mr-4">
                        /post/678
                    </a>
                    {/*========================================*/}
                    <a href="/auth" className="text-white mr-4">
                        🟢 /auth
                    </a>
                    <a href="/admin" className="text-white mr-4">
                        /admin
                    </a>
                    <a href="/admin/secret" className="text-white mr-4">
                        /admin/secret
                    </a>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;