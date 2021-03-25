import React, { HTMLAttributes } from 'react'
import { Scrollbars } from 'rc-scrollbars';

import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import './Carousel.css';

const  thumbHorizontal =({ style, ...props }: HTMLAttributes<HTMLDivElement>) => {
    const finalStyle = {
      ...style,
      cursor: 'pointer',
    
      backgroundColor: '#41522E',
    };
    return <div style={finalStyle} {...props} />;
  }
  
export default function Carousel() {
    return (
            <Scrollbars style={{ width:575,  height: 165 }} renderThumbHorizontal={thumbHorizontal}>
                <div className='carousel'>
                    <img src={img1}  alt=""/>
                    <img src={img2}  alt=""/>
                    <img src={img3}  alt=""/>
                    <img src={img1}  alt=""/>
                    <img src={img1}  alt=""/>
                </div>
            </Scrollbars>
    )
}
