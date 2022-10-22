import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
     padding:0;
     box-sizing:border-box;
 }

 
`;
export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const DivF = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 80%;
`;
export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 40vh;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;
export const Links = styled(Link)`
  color: red;
  text-decoration: none;
  list-style: none;
  font-size: 2rem;
  width: 9vw;
  &:hover {
    color: PaleVioletRed;
    font-weight: 600;
  }
`;
