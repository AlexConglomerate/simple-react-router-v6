import React from 'react';
import Frame from "./frame";
import {Route, Routes} from "react-router-dom";
import Red from "./red";
import Blue from "./blue";

function NewPage() {
    return (
        <div>
            <Frame>
                <Routes>
                    <Route path='/red' element={<Red/>}/>
                    <Route path='/blue' element={<Blue/>}/>
                </Routes>
            </Frame>
        </div>
    );
}

export default NewPage;