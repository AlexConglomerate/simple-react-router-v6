import React from 'react';
import {useNavigate} from "react-router-dom";
import {ChevronLeftIcon} from "@heroicons/react/20/solid";

function Red(props) {
    const navigate = useNavigate()
    const btnClass = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
    // если {replace: true} => страница заменяется (без возможности возврата)
    // если {replace: false} => переходим на новую страницу (с возможностью возврата).
    // {replace: false} => это дефолтное значение, т.е. если нужно сохранить возможность возврата, то можем не указывать ничего
    const navFunc = () => navigate('/post/567', {replace: false})

    return (
        <>
            <h1 className={'text-3xl hover:font-bold text-red-500 w-[600px]'}>
                Red
            </h1>
            <button
                className={btnClass}
                onClick={navFunc}
            >
                <ChevronLeftIcon className={'h-6'}></ChevronLeftIcon>
                То /post/567
            </button>


        </>
    );
}

export default Red;