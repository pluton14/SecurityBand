import React, {useState} from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
const Post = function(props){
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
        </div>
    )
}
export default Post;