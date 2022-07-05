import React, { useState } from 'react';
import { images } from './components/helpers/CarouselData';
import { Parallax } from 'react-parallax';
import './App.css';
import { CarFrame, MainContainer, InnerFrame, InsetFrame, Left, Middle, Right } from './components/helpers/CarouselStyles';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';


const img1 = "https://i.ibb.co/P6p4M8R/dark-stone-bg.jpg";
const img2 = "https://imgix.bustle.com/uploads/shutterstock/2022/3/31/ff861ff2-92db-4a04-8452-7557dde82b86-shutterstock-1866343888.jpg?w=2000&h=640&fit=crop&crop=faces&auto=format%2Ccompress";

function App() {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <body>
      <h1>
        <span>DR4</span>
        <span>@E+</span>
        <span style={{color: 'red'}}>W3 </span>
        <span>S!</span>
        <span>T%3</span>
        <span>+EW</span>
        <span style={{color: 'red'}}>K4</span>
        <span>/D</span>
        <span>D*4</span>
        <span>K^</span>
        <span style={{color: 'red'}}>W3 </span>
        <span>ST</span>
        <span>T!3</span>
        <span>W+E</span>
        <span style={{color: 'red'}}>K4</span>
        <span>RD</span>
      </h1>
      <h1>
        <span>KE+</span>
        <span>TS3</span>
        <span style={{color: 'red'}}>W3 </span>
        <span>ST</span>
        <span>TS3</span>
        <span>E%+</span>
        <span style={{color: 'red'}}>K4</span>
        <span>D+</span>
        <span>R^4</span>
        <span>WE+</span>
        <span style={{color: 'red'}}>W3 </span>
        <span>ST</span>
        <span>*3T</span>
        <span>W+E</span>
        <span style={{color: 'red'}}>K4</span>
        <span>4D</span>
      </h1>
      <h1>
        <span style={{color: 'red'}}>W3 </span>
        <span>ST</span>
        <span>%W</span>
        <span>+4K</span>
        <span>^T3</span>
        <span>W+E</span>
        <span style={{color: 'red'}}>K4</span>
        <span>-D</span>
        <span>^R4</span>
        <span>K+E</span>
        <span style={{color: 'red'}}>W3 </span>
        <span>ST</span>
        <span>T#3</span>
        <span>W+E</span>
        <span style={{color: 'red'}}>K4</span>
        <span>DR</span>
      </h1>
      <h1>
        <span>ST</span>
        <span>D#4</span>
        <span style={{color: 'red'}}>W3 </span>
        <span>ST</span>
        <span>TS3</span>
        <span>W+E</span>
        <span style={{color: 'red'}}>K4</span>
        <span>-D</span>
        <span>*R4</span>
        <span>!E+</span>
        <span style={{color: 'red'}}>W3 </span>
        <span>ST</span>
        <span>T-3</span>
        <span>W+E</span>
        <span style={{color: 'red'}}>K4</span>
        <span>%D</span>
      </h1>
    </body>  
  );
}

export default App;
