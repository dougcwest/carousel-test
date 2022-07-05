import React, { useState } from 'react';
import { images } from './helpers/CarouselData';
import { Parallax } from 'react-parallax';
import { CarFrame, MainContainer, InnerFrame, InsetFrame, Left, Middle, Right} from './helpers/CarouselStyles';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const Carousel = () => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <>
      <MainContainer>
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
        </CarFrame>
        <InsetFrame key={images[currentImg].description}>
          { /* eslint-disable-next-line react/jsx-no-target-blank */ }
          <h4>{images[currentImg].location} <a href={images[currentImg].link} target="_blank" ><AddLocationAltIcon style={{cursor: 'pointer'}}/></a></h4>
          <p>{images[currentImg].description}</p>
        </InsetFrame>
      </MainContainer>    
    </>
  )
}

export default Carousel;