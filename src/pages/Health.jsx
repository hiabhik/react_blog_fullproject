import React from 'react';
import Home1 from '../components/Home1';
import Post from '../components/Post';
import { useState, useEffect } from 'react';

const Bollywood = (props) => {
    const [data, setData] = useState("");

    const getArticles = async () => {
        props.setProgress(10);
        const url = "https://react-blog-backend-bay.vercel.app/health";
        const articles = await fetch(url);
        const parsedArticles = await articles.json();
        setData(parsedArticles);
        props.setProgress(100);
    }
    
    useEffect(() => {
        getArticles();
    }, []);
    
    const health = data.health;
    const healthTop = data.healthTop;
    return (
        <div className='Bollywood'>
            <div className='B1'>
                <p className='B1_1'>Health</p><br />
                {
                    health && health.map((val)=>{
                        return(
                            <div key={val.id}>
                                <Home1 url={val.urlToImage} title={val.title} tag={val.tag} details={val.description} date={val.publishedAt} />
                                <br /><hr /><br />
                            </div>
                        )
                    })
                }
                <div className='g_2'>
                    <span className="material-symbols-outlined">south</span>
                    LOAD MORE
                </div>
            </div>
            <div className='B2'>
                <p className='B1_1'>Top Posts</p><br />
                <img id='B2_1' src="https://staticg.sportskeeda.com/editor/2023/01/4eae7-16733303496009-1920.jpg" alt="" />
                <div className="B2_2">
                    <div>
                        <h4>What is the Code Red Diet?</h4> <br />
                        <div>
                            <b>Health</b>
                            <span className='g_2'> / Tue, 10 Jan 2023 05:38:04 GMT</span>
                        </div>
                    </div>
                    <h1 style={{color:"lightGrey"}}>1</h1>
                </div>
                <br /><hr /><br />
                {
                    healthTop && healthTop.map((val)=>{
                        return(
                            <div key={val.id}>
                                <Post serial={val.id} url={val.urlToImage} title={val.title} tag={val.tag} date={val.publishedAt} />
                                <br /><hr /><br />
                            </div>
                        )
                    })
                }
                <br /><br />
                <div className="B2_3">Advertisement</div>
            </div>
        </div>
    );
}

export default Bollywood;