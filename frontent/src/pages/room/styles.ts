import styled from "styled-components";
import bg from '../../assets/bg.jpg'
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-image: url(${bg});
  background-size: cover;

  input{
    border-color: hsl(0, 0%, 80%);
    /* border-radius: 4px; */
    border-style: solid;
    border-width: 1px;
  }
`;
