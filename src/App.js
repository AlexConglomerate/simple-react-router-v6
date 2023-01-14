import Home from "./page/home";
import {Navigate, Route, Routes} from "react-router-dom";
import Red from "./page/red";
import Blue from "./page/blue";
import Frame from "./page/frame";
import Post from "./page/post";
import PostId from "./page/postId";
import Redirect from "./page/redirect";
import NewColor from "./page/newColor";

function App() {
    return (
        <div>
            <Routes>
                <Route path='' element={<Home/>}/>
                <Route path='redirect' element={<Redirect/>}/>

                <Route path='color'>
                    <Route path='red' element={<Red/>}/>
                    <Route path='blue' element={<Blue/>}/>
                </Route>

                <Route path='frame' element={<Frame/>}>
                    {/*
                    если будет просто /frame, то редиректим на /redirect
                    можно редиректить на разные страницы, не только на /redirect
                    мы делаем нулевой путь "" для обработки ошибки*
                    Если здесь сделаем 'frame/new' (без первого '/'), то тогда редиректиться на 'frame/frame/new'
                    */}
                    <Route path='' element={<Navigate to={'frame/new'}/>}/>
                    <Route path='red' element={<Red/>}/>
                    <Route path='blue' element={<Blue/>}/>
                    <Route path='new' element={<NewColor/>}/>
                </Route>

                <Route path='post' element={<Frame/>}>
                    <Route path='' element={<Post/>}/>
                    <Route path=':postId' element={<PostId/>}/>
                </Route>

                <Route path={'*'} element={<Navigate to={'redirect'}/>}/>

            </Routes>
        </div>
    );
}

export default App;
