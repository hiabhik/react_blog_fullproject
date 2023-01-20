import React from 'react';
import { useNavigate } from 'react-router-dom';

const Stories = ({title, tag, details, date}) => {
    const navigate = useNavigate();
    const openArticle = () => {
        navigate('/ArticlePage');
    }
    return (
        <div className='stories' onClick={openArticle}>
            <p className='j_2'>{title}</p><br />
            <p className='j_3'>{details}</p><br />
            <div className='j_4'>
                <b>{tag}</b>
                <span className='g_2'> / {new Date(date).toGMTString()}</span>
            </div>
        </div>
    );
}

export default Stories;