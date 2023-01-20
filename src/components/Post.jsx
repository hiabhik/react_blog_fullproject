import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = ({title, tag, url, serial, date}) => {
    const navigate = useNavigate();
    const openArticle = () => {
        navigate('/ArticlePage');
    }
    return (
        <div className="B2_2" onClick={openArticle}>
            <img className='castle2' src={url} alt="pic" />
            <div style={{fontSize: "small"}}>
                <h4>{title}</h4> <br />
                <div>
                    <b>{tag}</b>
                    <span className='g_2'> / {new Date(date).toGMTString()}</span>
                </div>
            </div>
            <h1 style={{color:"lightGrey"}}>{serial}</h1>
        </div>
    );
}

export default Post;