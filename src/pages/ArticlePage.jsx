import React from 'react';
import Mask from './Images/Mask.png';
import Social from './Images/social.png';
import ReactPng from './Images/React.png';
import code from './Images/Code.png';
import rythm from './Images/rythm.svg';
import share from './Images/share.svg';
import MoreArticle from '../components/MoreArticle';

const ArticlePage = () => {
    return (
        <div className='ArtPage'>
            <div className='A1'>
                <div className="N1">
                    <span id="N1_1">The</span>
                    <span id="N1_2">Siren</span>
                </div>
                <button className='A1_2'>Get Started</button>
            </div>
            <div className="A2">
                <h2 className='way'>Ways to animate a React app.</h2>
                <div className="A2_1">
                    <img src={Mask} alt="mask" className='mask' />
                    <div>
                        <p className='A2_1_1'>Dmitry Nozhenko</p>
                        <p className='lgText'>Jan 28, 2019- 10 min read</p>
                    </div>
                    <img src={Social} alt="socials" id='social' />
                </div>
                <img src={ReactPng} alt="Reactpng" style={{width:"100%"}} />
                <p className='A2_2'>Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React. <br /><br /> Let's talk about them</p>
                <img src={code} alt="code" style={{width:"100%"}} />
                <div className='A2_3'>
                    <span className="A2_3_1">React</span>
                    <span className="A2_3_1">Javascript</span>
                    <span className="A2_3_1">Animation</span>
                    <div className='A2_1'>
                        <img src={rythm} alt="clap" style={{marginRight:'10px'}} />
                        <span className='lgText'>9.3k claps</span>
                    </div>
                    <hr />
                    <div className="A2_1">
                        <img src={Mask} alt="mask" className='mask' />
                        <div>
                            <p className='lgText'>WRITTEN BY</p>
                            <p className='A2_1_1'>Dmitry Nozhenko</p>
                            <p className='lgText'>Jan 28, 2019- 10 min read</p>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="A2_4">
                    <div className='A2_1'>
                        <img src={rythm} alt="clap" style={{marginRight:'10px'}} />
                        <span className='lgText'>9.3k claps</span>
                    </div>
                    <div className='A2_1'>
                        <img src={share} alt="clap" style={{marginRight:'20px'}} />
                        <span className='lgText'>Share this article</span>
                    </div>
                </div>
            </div>
            <div className="A3">
                <h3>More From The Siren</h3>
                <hr className='horiz2' />
                <div className="A3_1">
                    <MoreArticle />
                    <MoreArticle />
                    <MoreArticle />
                </div>
            </div>
        </div>
    );
}

export default ArticlePage;