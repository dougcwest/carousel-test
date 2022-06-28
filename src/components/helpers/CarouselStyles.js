import styled from 'styled-components';

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
  animation-direction: normal;
  transition: ease all 0.5s;  
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

export { CarFrame, InnerFrame, Left, Middle, Right}
