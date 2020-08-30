import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import MyScroll from "../ScrollDown/MyScroll";
import styled from 'styled-components'

//Images
import Slide1 from '../../assets/img/carousal/slide1.webp'
import Slide2 from '../../assets/img/carousal/slide2.webp'
import Slide3 from '../../assets/img/carousal/slide3.webp'



const Image = styled.img`
  height: 100vh;
  object-fit: cover;
  z-index: -2;
  opacity: 0.7;
}`

const MyCarousel = () => {
    return (
      <div id= 'home' className='home'>
        <Carousel  controls={false} indicators interval = {2500} pause={false} >
        <Carousel.Item>
          <Image className="d-block w-100 carousel-img"
            src={Slide1}
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 carousel-img"
            src={Slide2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 carousel-img"
            src={Slide3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <MyScroll />
      </div>
    )
}

export default MyCarousel
