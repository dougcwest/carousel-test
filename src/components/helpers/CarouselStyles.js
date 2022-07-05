import styled from 'styled-components';

const CarFrame = styled.div`
  width: 100%;
  height 1000px;
  color: antiquewhite;

  @media only screen and (max-width: 600px) {
    height: 400px;

    p {
      font-size: 14px;
    }
  }
  `;

const MainContainer = styled.div`
  display: flex,
  flex-direction: column,
  align-items: center;
  justify-content: center;
  width: 100%;
`;  

const InnerFrame = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  transition: 550ms ease-out;
`;

const InsetFrame = styled.div`
  display: flex;
  padding: 50px;
  width: 900px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(250, 235, 215, 0.8);
  animation: rollout 0.6s;
  color: #333;

  h1 {
    color: #333;
  }
}   
`;

const Left = styled.div`
  flex: 7%;
  height: 100%;
  display: grid;
  place-items: center;
  
  &:hover {
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    &:hover {
      background: none;
  }
`;

const Middle = styled.div`
  flex: 86%;
  height: 100%;

  h1 {
    margin-left: 25px;
    margin-top: 48px;
    padding-top: 0;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.2);
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 36px;
    }
  }
`;

const Right = styled.div`
  flex: 7%;
  height: 100%;
  display: grid;
  place-items: center;
  
  &:hover {
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    &:hover {
      background: none;
  }
`;

export { CarFrame, MainContainer, InnerFrame, InsetFrame, Left, Middle, Right}
