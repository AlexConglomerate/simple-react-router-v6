import Home from "./page/home";
import {Route, Routes} from "react-router-dom";
import Red from "./page/red";
import Blue from "./page/blue";
import Frame from "./page/frame";
import Post from "./page/post";
import PostId from "./page/postId";

function App() {
    return (
        <div>
            <Routes>
                <Route path='' element={<Home/>}/>

                <Route path='color'>
                    <Route path='red' element={<Red/>}/>
                    <Route path='blue' element={<Blue/>}/>
                </Route>

                <Route path='frame' element={<Frame/>}>
                    <Route path='red' element={<Red/>}/>
                    <Route path='blue' element={<Blue/>}/>
                </Route>

                <Route path='post' element={<Frame/>}>
                    <Route path='' element={<Post/>}/>
                    <Route path=':postId' element={<PostId/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
