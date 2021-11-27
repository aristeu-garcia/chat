import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface IButton extends ButtonProps {
  bg?: string;
  borderRadius?: string;
}

const Button: React.FC<IButton> = ({
  children,
  bg,
  borderRadius,
  ...rest
}: IButton) => (
  <Container type="button" bg={bg} borderRadius={borderRadius} {...rest}>
    {children}
  </Container>
);

export default Button;
