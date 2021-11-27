import styled from "styled-components";

export const Container = styled.button<{ bg?: string; borderRadius?: string }>`
  border: none;
  display: flex;
  background: ${(props) => (props.bg ? props.bg : "none")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "none"};
    align-items: center;
    justify-content: center;
  padding: 5px;
`;
