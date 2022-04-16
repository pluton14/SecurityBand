import React, {useState} from 'react';
const Counter = function(){
    const [likes, setLikes] = useState(0)
    function inc(){
        setLikes(likes + 1);
    }
    function dec(){
        setLikes(likes - 1);
    }
    return(
        <div>
            <h1>{likes}</h1>
            <button onClick={inc}>+++</button>
            <button onClick={dec}>---</button>
        </div>
    );
}
export default Counter;