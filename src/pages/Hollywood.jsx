import React from 'react';
import Home1 from '../components/Home1';
import Post from '../components/Post';
import { useState, useEffect } from 'react';

const Bollywood = (props) => {
    const [data, setData] = useState("");

    const getArticles = async () => {
        props.setProgress(10);
        const url = "https://react-blog-backend-bay.vercel.app/hollywood";
        const articles = await fetch(url);
        const parsedArticles = await articles.json();
        setData(parsedArticles);
        props.setProgress(100);
    }
    
    useEffect(() => {
        getArticles();
    }, []);
    
    const holly = data.hollywood;
    const hollyTop = data.hollyTop;
    return (
        <div className='Bollywood'>
            <div className='B1'>
                <p className='B1_1'>Hollywood</p><br />
                {
                    holly && holly.map((val)=>{
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
                <img id='B2_1' src="https://i.ytimg.com/vi/8w88TheBKC0/maxresdefault_live.jpg" alt="" />
                <div className="B2_2">
                    <div>
                        <h4>Londoners Have Little Sympathy For Prince Harry After He Reveals His Feud With William</h4> <br />
                        <div>
                            <b>Hollywood</b>
                            <span className='g_2'> / Tue, 10 Jan 2023 05:38:04 GMT</span>
                        </div>
                    </div>
                    <h1 style={{color:"lightGrey"}}>1</h1>
                </div>
                <br /><hr /><br />
                {
                    hollyTop && hollyTop.map((val)=>{
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