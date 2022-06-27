import React, { useState } from 'react';
import { images } from './helpers/CarouselData';
import styled from 'styled-components';

const Carousel = () => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <CarFrame> 
      <InnerFrame style={{backgroundImage: `url(${images[currentImg].img})`}}>
      </InnerFrame>
    </CarFrame>
  )
}

export default Carousel;

const CarFrame = styled.div`
  width: 90%;
  height 700px;
  background: #ececec;
  `;

const InnerFrame = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;  
`;
