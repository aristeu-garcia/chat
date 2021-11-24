import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
const Input: React.FC<InputProps> = ({ ...rest }) => {
  return <Container {...rest}></Container>;
};
export default Input;
