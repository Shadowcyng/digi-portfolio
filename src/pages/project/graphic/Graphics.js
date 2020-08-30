import React, { useState, Fragment } from 'react'
import G_1 from '../../../assets/img/projects/graphics/1.webp'
import G_2 from '../../../assets/img/projects/graphics/2.webp'
import G_3 from '../../../assets/img/projects/graphics/3.webp'
import G_4 from '../../../assets/img/projects/graphics/4.webp'
import G_5 from '../../../assets/img/projects/graphics/5.webp'
import G_6 from '../../../assets/img/projects/graphics/6.webp'
import G_7 from '../../../assets/img/projects/graphics/7.webp'
import G_8 from '../../../assets/img/projects/graphics/8.webp'
import G_9 from '../../../assets/img/projects/graphics/9.webp'
import G_10 from '../../../assets/img/projects/graphics/10.webp'
import G_11 from '../../../assets/img/projects/graphics/11.webp'
import G_12 from '../../../assets/img/projects/graphics/12.webp'
import G_13 from '../../../assets/img/projects/graphics/13.webp'
import G_14 from '../../../assets/img/projects/graphics/14.webp'
import G_15 from '../../../assets/img/projects/graphics/15.webp'
import G_16 from '../../../assets/img/projects/graphics/16.webp'
import G_17 from '../../../assets/img/projects/graphics/17.webp'

import { animated, useSpring } from "react-spring";
import './Graphics.css';
import { useScroll } from "react-use-gesture";
import Tilt from 'react-tilt'

const images = [
   G_3, G_17, G_6, G_1, G_4, G_2, G_7, G_8, G_9, G_10, G_11, G_12, G_13, G_14, G_15,
]

const Graphics = () => {

        const [img, setImg] = useState(G_3);

       
        const [style, set] = useSpring(() => ({
            transform: "perspective(500px) rotateY(0deg)"
          }));
          
          const clamp = (value, clampAt = 30) => {
            if (value > 0) {
              return value > clampAt ? clampAt : value;
            } else {
              return value < -clampAt ? -clampAt : value;
            }
          };

          const bind = useScroll(event => {
            set({
              transform: `perspective(500px) rotateY(${
                event.scrolling ? clamp( event.delta[0]) : 0
              }deg)`
            });
          });

        const handleImage = (image, event) => {
            event.preventDefault();
            setImg(image);
        }
    return (
        <Fragment>

                  { img && 
            <Tilt options={{ max :30, scale: 1.02 }} >
            <div className='full-width-image-container'>
            <img src={img} alt='graphic' className='full-image' />
                     </div>
                     </Tilt>
                     }
                <div className="image-container" {...bind()}>
                    {images.map(src => (
                        <animated.div
                        key={src}
                        className="image-card"
                        onClick={(e)=> handleImage(src,e)}
                        style={{
                            ...style,
                            backgroundImage: `url(${src})`
                        }}
                        />
                        ))} 
                    </div>
                        
        </Fragment>
    )
}

export default Graphics
