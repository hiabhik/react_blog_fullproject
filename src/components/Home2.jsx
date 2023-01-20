import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home2 = ({title, tag, details, url, date}) => {
    const navigate = useNavigate();
    const openArticle = () => {
        navigate('/ArticlePage');
    }
    return (
        <div className='Home2' onClick={openArticle}>
            <img className='castle3' src={url} alt="pic" />
            <div className='guide'>
                <h4>{title}</h4> <br />
                <span className='g_2'>{details}</span><br />
                <div>
                    <b>{tag}</b>
                    <span className='g_2'> / {new Date(date).toGMTString()}</span>
                </div>
            </div>
        </div>
    );
}

export default Home2;