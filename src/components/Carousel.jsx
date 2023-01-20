import React from 'react';

const Carousel = () => {
    // let slideIndex = 1;
    // showSlides(slideIndex);

    // function currentSlide(n){
    //     slideIndex = n;
    //     showSlides(slideIndex);
    // }

    // function showSlides(n){
    //     setTimeout(() => {
    //         const slides = document.getElementsByClassName("mySlides");
    //         console.log(slides);
    //         const dots = document.getElementsByClassName('dot');
    //         if (n > slides.length) {slideIndex = 1}
    //         if (n < 1) {slideIndex = slides.length}
    //         for (let i = 0; i < slides.length; i++) {
    //             slides[i].style.display = "none";
    //         }
    //         for (let i = 0; i < dots.length; i++) {
    //             dots[i].classList.remove('activeDot');
    //         }
    //         slides[slideIndex-1].style.display = "block";
    //         dots[slideIndex-1].classList.add('activeDot');
    //     }, 500);
    // }

    return (
        <div className='Home'>
            <div className='hp1'>
                <p id='hp1_1'>Title of vertical gallery</p>
                <span id='hp1_2'>Travel / August 21, 2017</span>
            </div>
            <div>
                <div className='hp2'>
                    <p className='hp2_1'>The Sound cloud</p>
                    <p className='hp2_2'>You loved is doomed</p>
                    <span className='hp2_3'>Travel / August 21, 2017</span>
                </div>
                <div className='hp2'>
                    <p className='hp2_1'>The Sound cloud</p>
                    <p className='hp2_2'>You loved is doomed</p>
                    <span className='hp2_3'>Travel / August 21, 2017</span>
                </div>
            </div>
            {/* <div className='carousel'>
                <span className="dot" onClick={currentSlide(1)}></span> 
                <span className="dot" onClick={currentSlide(2)}></span> 
                <span className="dot" onClick={currentSlide(3)}></span> 
            </div> */}
        </div>
    );
}

export default Carousel;