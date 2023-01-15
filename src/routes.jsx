import Home from "./page/home";
import {Navigate} from "react-router-dom";
import Auth from "./page/auth";
import Red from "./page/red";
import Blue from "./page/blue";
import NewColor from "./page/newColor";
import Frame from "./page/frame";
import Post from "./page/post";
import PostId from "./page/postId";
import Admin from "./page/admin";
import Secret from "./page/secret";
import AdminLayout from "./page/adminLayout";

const routes = (isLoggedIn, location) => [
    {path: '', element: <Home/>},
    {path: '*', element: <Navigate to={isLoggedIn ? '' : 'auth'}/>},
    {path: 'auth', element: <Auth/>},
    {
        path: 'color', children: [
            {path: 'red', element: <Red/>},
            {path: 'blue', element: <Blue/>},
        ],
    },
    {
        path: 'frame', children: [
            {path: '', element: <Navigate to={'/frame/new'}/>},
            {path: '*', element: <Navigate to={'/frame/new'}/>},
            {path: 'red', element: <Red/>},
            {path: 'blue', element: <Blue/>},
            {path: 'new', element: <NewColor/>},
        ],
    },
    {
        path: 'post', element: <Frame/>, children: [
            {path: '', element: <Post/>},
            {path: '*', element: <Post/>},
            {path: 'post', element: <Post/>},
            {path: ':postId', element: <PostId/>},
        ],
    },
    {
        path: 'admin',
        element: isLoggedIn ? <AdminLayout/> : <Navigate to={'/auth'} state={{referrer: location}}/>,
        children: [
            {path: '', element: <Admin/>},
            {path: 'secret', element: <Secret/>},
        ]
    },
    // {
    //     path: 'admin', element: <Admin/>, children: [
    //         {path: 'secret', element: <Secret/>},
    //     ]
    // }

]

export default routes