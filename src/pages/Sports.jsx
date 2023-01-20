import React from 'react';
import Home1 from '../components/Home1';
import Post from '../components/Post';
import { useState, useEffect } from 'react';

const Bollywood = (props) => {
    const [data, setData] = useState("");
    const getArticles = async () => {
        props.setProgress(10);
        const url = "https://react-blog-backend-bay.vercel.app/sports";
        const articles = await fetch(url);
        const parsedArticles = await articles.json();
        setData(parsedArticles);
        props.setProgress(100);
    }
    useEffect(() => {
        getArticles();
    }, []);

    const sports = data.sports;
    const sportsTop = data.sportsTop;
    return (
        <div className='Bollywood'>
            <div className='B1'>
                <p className='B1_1'>Sports</p><br />
                {
                    sports && sports.map((val)=>{
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
                <img id='B2_1' src="https://c.ndtvimg.com/2023-01/2goqoul_virat-kohli_625x300_01_January_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675" alt="" />
                <div className="B2_2">
                    <div>
                        <h4>Virat Kohli On Cusp of Shattering Sachin Tendulkar's 'All-time Records' in Sri Lanka ODIs</h4> <br />
                        <div>
                            <b>Sports</b>
                            <span className='g_2'> / Tue, 10 Jan 2023 05:38:04 GMT</span>
                        </div>
                    </div>
                    <h1 style={{color:"lightGrey"}}>1</h1>
                </div>
                <br /><hr /><br />
                {
                    sportsTop && sportsTop.map((val)=>{
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