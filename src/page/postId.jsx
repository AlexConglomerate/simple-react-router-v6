import React from 'react';
import {Navigate, useParams} from "react-router-dom";

function PostId(props) {
    const {postId} = useParams()

    // При посте 123 будет редирект
    if (postId == '123') {
        return <Navigate to={'redirect'}/>
    }
    return (
        <div className={'text-3xl hover:font-bold text-black'}>
            {postId}
            При посте 123 будет редирект
        </div>
    );
}

export default PostId;