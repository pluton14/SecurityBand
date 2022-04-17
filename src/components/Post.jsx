import React, {useState} from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import axios from 'axios';
const Post = function(props){
    axios.post('url/', {props.post}) .then(res => { console.log(res); console.log(res.data); })
    return(
        <div className='post'>
            <div className='post__content'>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
                <div>
                    Цена: {props.post.price}
                </div>
            </div>
            <MyButton></MyButton>
        </div>
    )
}
export default Post;