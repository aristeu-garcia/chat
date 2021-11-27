import styled from "styled-components";

export const Container = styled.input`
  border: none;
  background: none;
  padding: 10px;
  border-radius: 10px;
  width: 80%;
  color: #ffff;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #FFFF;
    opacity: 1; /* Firefox */
  }
`;
