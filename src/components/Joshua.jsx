import React from 'react';
import { useNavigate } from 'react-router-dom';

const Joshua = ({title, tag, details, url, date}) => {
    const navigate = useNavigate();
    const openArticle = () => {
        navigate('/ArticlePage');
    }
    return (
        <div className="joshua" onClick={openArticle}>
                <img className='j_1' src={url} alt="" />
                <div>
                    <p className='j_2'>{title}</p><br />
                    <p className='j_3'>{details}</p><br />
                    <div className='j_4'>
                        <b>{tag}</b>
                            <span className='g_2'> / {new Date(date).toGMTString()}</span>
                    </div>
                </div>
        </div>
    );
}

export default Joshua;