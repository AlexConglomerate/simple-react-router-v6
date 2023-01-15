import Home from "./page/home";
import {Navigate, Route, Routes} from "react-router-dom";
import Red from "./page/red";
import Blue from "./page/blue";
import Frame from "./page/frame";
import Post from "./page/post";
import PostId from "./page/postId";
import Redirect from "./page/redirect";
import NewColor from "./page/newColor";
import NewPage from "./page/newPage";
import ProtectedRoute from "./page/protectedRoute";
import Auth from "./page/auth";
import Admin from "./page/admin";
import Navbar from "./page/navbar";

// Главное обрабытывать

function App() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path='' element={<Home/>}/>
                <Route path='redirect' element={<Redirect/>}/>

                {/*это не работает*/}
                <Route path='/newpage/*' element={<NewPage/>}> </Route>

                <Route path='color'>
                    <Route path='red' element={<Red/>}/>
                    <Route path='blue' element={<Blue/>}/>
                </Route>

                <Route path='frame' element={<Frame/>}>
                    {/*
                    Ещё важно обрабатывать пустые пути

                    В path без разницы, указываем мы в начале '/', или нет.
                    А в Navigate:
                        с '/' => указываем относительный путь (адрес прикрепиться к вышестоящему роуту)
                        без '/' => указываем абсолютный путь
                    Примеры в Navigate:
                        'frame/new' означает => 'frame/frame/new' => и т.к. такого пути нет => 'redirect'
                        '/frame/new' означает => 'frame/new'
                    */}
                    <Route path='' element={<Navigate to={'/frame/new'}/>}/>
                    <Route path='red' element={<Red/>}/>
                    <Route path='blue' element={<Blue/>}/>
                    <Route path='new' element={<NewColor/>}/>
                </Route>

                <Route path='post' element={<Frame/>}>
                    <Route path='' element={<Post/>}/>
                    <Route path=':postId' element={<PostId/>}/>
                </Route>

                <Route path='auth' element={<Auth/>}/>

                <Route path='admin' element={
                    <ProtectedRoute redirectTo={'/auth'}>
                        <Admin/>
                    </ProtectedRoute>}
                />

                <Route path={'*'} element={<Navigate to={'redirect'}/>}/>

            </Routes>
        </div>
    );
}

export default App;
