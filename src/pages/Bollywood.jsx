import React from 'react';
import Home1 from '../components/Home1';
import Post from '../components/Post';
import { useState, useEffect } from 'react';

const Bollywood = (props) => {
    const [data, setData] = useState("");
    const getBollyArticles = async () => {
        props.setProgress(10);
        const url = "https://react-blog-backend-bay.vercel.app/bollywood";
        const articles = await fetch(url);
        const parsedArticles = await articles.json();
        setData(parsedArticles);
        props.setProgress(100)
    }
    useEffect(() => {
        getBollyArticles();
    },[]);
    const bolly = data.bollywood;
    const bollyTop = data.bollyTop;

    return (
        <div className='Bollywood'>
            <div className='B1'>
                <p className='B1_1'>Bollywood</p><br />
                {
                    bolly && bolly.map((val)=>{
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
                <img id='B2_1' src="https://www.greatandhra.com/newphotos10/raja_rrr41673288182.jpg" alt="" />
                <div className="B2_2">
                    <div>
                        <h4>Is RRR Sequel a Publicity Stunt?</h4> <br />
                        <div>
                            <b>Bollywood</b>
                            <span className='g_2'> / Tue, 10 Jan 2023 05:38:04 GMT</span>
                        </div>
                    </div>
                    <h1 style={{color:"lightGrey"}}>1</h1>
                </div>
                <br /><hr /><br />
                {
                    bollyTop && bollyTop.map((val)=>{
                        return(
                            <div key={val.id}>
                                <Post serial={val.id} url={val.urlToImage} title={val.title} tag={val.tag} date={val.publishedAt} />
                                <br /><hr /><br />
                            </div>
                        )
                    })
                }
                <br />
                <div className="B2_3">Advertisement</div>
            </div>
        </div>
    );
}

export default Bollywood;