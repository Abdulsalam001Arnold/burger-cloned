import React from 'react';
import { Carousel } from 'antd';
import img1 from '../images/Artboard-15-20.jpg'
import img2 from '../images/Have-it-your-Way-edit-2.jpg'
import img3 from '../images/meet-the-long-kings.jpg'
import img4 from '../images/New-Sides-Intro-Blog-1.jpg'



const contentStyle = {
  height: '1rem'
};
const Slide = () => (
  <Carousel autoplay className='md:w-full my-0 md:mx-0 relative top-0'>
    <div className={`relative z-0 md:w-full my-0 mx-0`}>
    <img src={img1}/>

    </div>
    <div>
    <img src={img2} />
      
    </div>
    <div>
      <img src={img3}/>
      
    </div>
   
  </Carousel>
);
export default Slide;