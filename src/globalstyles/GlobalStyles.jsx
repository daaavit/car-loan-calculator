import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f4f7fb;
  height: 100vh;
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
  align-items: center;
  height: 80%;
  width: 30%;
  background: #e8edc5;
  filter: drop-shadow(29px 14px 6px #000);
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 90vw;
    margin-bottom: 10%;
  }
`;

export const Brake_Down = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
  height: 80%;
  width: 30%;
  background: #edcdc5;
  filter: drop-shadow(29px 14px 6px #000);
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 90vw;
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
`;
export const Button_Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 12%;
  width: 90%;
  background: none;
`;

export const Input = styled.input`
  display: flex;
  height: 5%;
  padding: 0.5em;
  margin: 0.5em;
  color: black;
  background: white;
  border: none;
  border-radius: 3px;
  margin: 4%;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content; center;
    background: lightBlue;
    border-bottom-right-radius: 20px;
    height: 50%;
    width: 40%;
    color: black;
    font-size: 1.2em;
    font-weight: bold;

`;
