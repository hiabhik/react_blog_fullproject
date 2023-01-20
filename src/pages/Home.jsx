import React from 'react';
import Castle from '../components/Castle';
import Home2 from '../components/Home2';
import Joshua from '../components/Joshua';
import Stories from '../components/Stories';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import { useState, useEffect } from 'react';

const Home = (props) => {
    const navigate = useNavigate();
    const openArticle = () => {
        navigate('./ArticlePage');
    }
    const [data, setData] = useState("");
    const getArticles = async () => {
        props.setProgress(10);
        const url = "https://react-blog-backend-bay.vercel.app/";
        const articles = await fetch(url);
        const parsedArticles = await articles.json();
        setData(parsedArticles);
        props.setProgress(100)
    }
    const home = data.home;
    const homeTop = data.homeTop;
    const homeLatest = data.homeLatest;
    const homeStories =data.homeStories;

    useEffect(() => {
        getArticles();
    },[]);

    return (
        <>
        <Carousel />
        <br /><br />

        <p className='latest'>The Latest</p>
        <div className="LatestBox">
            {
                homeLatest && homeLatest.map((val)=>{
                    return(
                        <div key={val.publishedAt}>
                            <Joshua url={val.urlToImage} title={val.title} tag={val.tag} details={val.description} date={val.publishedAt} />
                        </div>
                    )
                })
            }
        </div>
        <p className='latest'>Latest Articles</p>
        <div className='Bollywood'>
            <div className='B1'>
                {
                    home && home.map((val)=>{
                        return(
                            <div key={val.id}>
                                <Home2 url={val.urlToImage} title={val.title} tag={val.tag} details={val.description} date={val.publishedAt} />
                                <br /><hr /><br />
                            </div>
                        )
                    })
                }
                <div className='g_2 load'>
                <span className="material-symbols-outlined">south</span>
                    LOAD MORE
                </div>
                <br /><br /><br />
                <div className="latArt">
                    <p id='la1'>Title of vertical gallery</p>
                    <span id='la2'>General / Tue, 10 Jan 2023 05:38:04 GMT</span>
                </div>
            </div>
            <div className='B2'>
                <div className="Adv">Advertisement</div><br /><br /><br />
                <h2>Top Posts</h2><br />
                <div onClick={openArticle}>
                    <img id='B2_1' src="https://c.ndtvimg.com/2023-01/fja4nh0o_joshimath_625x300_09_January_23.jpg" alt="" />
                    <div className="B2_2 B-res">
                        <div>
                            <h4>Rescuing Joshimath: Demolitions Begin Today</h4> <br />
                            <div>
                                <b>General</b>
                                <span className='g_2'> / August 21, 2017</span>
                            </div>
                        </div>
                        <h1 style={{color:"lightGrey"}}>1</h1>
                    </div>
                </div><br /><hr /><br />
                {
                    homeTop && homeTop.map((val)=>{
                        return(
                            <div key={val.id}>
                                <Castle serial={val.id} url={val.urlToImage} title={val.title} tag={val.tag} date={val.publishedAt} />
                                <br /><hr /><br />
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <p className='latest'>Latest Stories</p>
        <br /><hr style={{width:"80%", margin:"auto"}}/>
        <div className="Bollywood">
            {
                homeStories && homeStories.map((val)=> {
                    return(
                        <div key={val.publishedAt}>
                            <Stories title={val.title} tag={val.tag} details={val.description} date={val.publishedAt} />
                            {/* <hr className='horiz' /> */}
                        </div>
                    )
                })
            }
        </div>
        <hr style={{width:"80%", margin:"auto"}}/><br/><br/>
        <div className='view'>
            VIEW MORE
            <span className="material-symbols-outlined">trending_flat</span>
        </div>
        </>
    );
}

export default Home;