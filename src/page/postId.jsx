import React from 'react';
import {Navigate, useNavigate, useParams} from "react-router-dom";

function PostId(props) {
    const {postId} = useParams()
    const navigate = useNavigate()
    // '-1' - значит вернуться на 1 страницу назад. Можем делать и '+1' и '-2' и т.д.
    const navFunc = () => navigate(-1)
    const btnClass = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5"

    // При посте 123 будет редирект
    if (postId == '123') {
        return <Navigate to={'redirect'}/>
    }
    return (
        <>
            <div className={'text-3xl text-black'}>
                Вы читаете пост №
                <w className={'hover:font-bold'}>
                    {postId}
                </w>
                <hr/>
                <div className={"text-base italic"}>
                    При посте 123 будет редирект
                </div>
            </div>
            <div>
                <button
                    className={btnClass}
                    onClick={navFunc}
                >
                    Вернуться на одну страницу назад
                </button>
            </div>
        </>
    );
}

export default PostId;