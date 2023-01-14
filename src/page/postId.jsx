import React from 'react';
import {useParams} from "react-router-dom";

function PostId(props) {
    const {postId} = useParams()
    return (
        <div className={'text-3xl hover:font-bold text-black'}>
            {postId}
        </div>
    );
}

export default PostId;