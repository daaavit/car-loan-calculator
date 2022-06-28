import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #dde1e7;
  height: 100vh;

  @media (max-width: 750px) {
    height: auto;
  }
`;
export const Title_Area = styled.div`
  display: flex;
  height: 10%;
  width: 80%;
  // background: red;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
    display: flex;
    flex-direction: ${(props) => props.flexDirection};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
    aling-contnent: ${(props) => props.alignContnent};
    font-size ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    text-align: ${(props) => props.textAlign};
    color:${(props) => props.color};
    filter:${(props) => props.filter};
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    @media (max-width: 750px) {
      display: flex;
      font-size: 1.5em;
      // filter:drop-shadow(15px 3px 3px #000)
    }
`;
export const Calc_Area = styled.div`
  display: flex;
  height: 90%;
  width: 80%;
  background: none;
  // border-radius: 50px;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
  
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

export const Calculator = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4%;
  align-items: center;
  height: 90%;
  width: 30%;
  background: #dde1e7;
  box-shadow:  -7px -7px 20px #ffffff70,  7px 7px 20px #00000070;
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 90vw;
    margin-bottom: 10%;
    box-shadow:  -7px -7px 5px #ffffff70,  7px 7px 15px #00000070;
  }
`;

export const Brake_Down = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
  height: 90%;
  width: 30%;
  background: #dde1e7;
  border-radius: 4%;
  box-shadow:  -7px -7px 20px #ffffff70,  7px 7px 20px #00000070;
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 90vw;
    box-shadow:  -7px -7px 20px #ffffff70,  7px 7px 20px #00000070;
  }
`;

export const Uni_Div = styled.div`
    display: flex;
    flex-direction: ${(props) => props.flexDirection};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
    align-content: ${(props) => props.alignContent};
    font-size ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    text-align: ${(props) => props.textAlign};
    color:${(props) => props.color};
    filter:${(props) => props.filter};
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    border-bottom: ${(props) => props.borderBottom}
    // border: 3px solid red; 


`;
export const Input_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  width: 80%;
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }

`;
export const Button_Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 12%;
  width: 90%;
  background: none;
  @media (max-width: 750px) {
    display: flex;
    height: 10vh;
  }
`;

export const Input = styled.input`
  display: flex;
  height: 5%;
  width: 80%;
  padding: 0.5em;
  margin: 0.5em;
  color: gray;
  background: rgb(242, 242, 242);
  border: none;
  box-shadow: inset -2px -2px 15px rgb(255, 255, 255),  inset 2px 2px 3px rgb(0, 0, 0) !important;
  border-radius: 3px;
  margin: 4%;

  :hover {
    color: black;
  }
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content; center;
    border: none;
    background: #dde1e7;
    box-shadow:  -2px -2px 5px #ffffff70,  2px 2px 15px #00000090;
    border-radius: 30px;
    height: 50%;
    width: 40%;
    color: black;
    font-size: 1.2em;
    font-weight: bold;

    :active {
      box-shadow: inset -2px -2px 5px #ffffff70,  inset 2px 2px 5px #00000070;
    }

`;
