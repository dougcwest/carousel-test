import React, { useState } from 'react';
import { images } from './helpers/CarouselData';
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const Carousel = () => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <>
      <CarFrame> 
        <InnerFrame style={{backgroundImage: `url(${images[currentImg].img})`}}>
          <Left onClick={() => {currentImg > 0 && setCurrentImg(currentImg - 1)}}>
            <ArrowBackIosIcon style={{fontSize: 30 }}/>
          </Left>
          <Middle>
            <h1>{images[currentImg].title}</h1>
          </Middle>
          <Right onClick={() => {currentImg < images.length - 1 && setCurrentImg(currentImg + 1)}}>
            <ArrowForwardIosIcon style={{fontSize: 30 }}/>
          </Right>
        </InnerFrame>
        { /* eslint-disable-next-line react/jsx-no-target-blank */ }
        <h4>{images[currentImg].location} <a href={images[currentImg].link} target="_blank" ><AddLocationAltIcon style={{cursor: 'pointer'}}/></a></h4>
        <p>{images[currentImg].description}</p>
      </CarFrame>
    </>
  )
}

export default Carousel;

const CarFrame = styled.div`
  width: 100%;
  height 700px;
  color: antiquewhite;

  h4 {
    margin-left: 50px;
  }

  p {
    margin-left: 50px;
    margin-right: 50px;
  }

  @media only screen and (max-width: 600px) {
    height: 400px;
    
    p {
      font-size: 14px;
    }
  }
  `;

const InnerFrame = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;  
`;

const Left = styled.div`
  flex: 5%;
  border-bottom-right-radius: 100px;
  border-top-right-radius: 100px;
  height: 100%;
  display: grid;
  place-items: center;
  
  &:hover {
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;

const Middle = styled.div`
  flex: 90%;
  height: 100%;

  h1 {
    margin-left: 25px;
    margin-top: 48px;
    padding-top: 0;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 36px;
    }
  }
`;

const Right = styled.div`
  flex: 5%;
  border-bottom-left-radius: 100px;
  border-top-left-radius: 100px;
  height: 100%;
  display: grid;
  place-items: center;
  
  &:hover {
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
