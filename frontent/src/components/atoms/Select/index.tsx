import React, { Component } from "react";
import Select, { Props } from "react-select";
import { Container } from "./styles";

interface Option {
  value: string;
  label: string;
}

interface Options extends Props {
  options: Option[];
}

const CustomStyle = {
  option: (base: any, state: { isSelected: boolean }) => ({
    ...base,
    backgroundColor: state.isSelected ? "#4683ff" : "#1c2125",
  }),
};

const DropDown: React.FC<Options> = ({ options, ...rest }) => (
  <Container>
    <Select
      placeholder="Selecione a sala"
      options={options}
      {...rest}
      styles={CustomStyle}
    />
  </Container>
);
export default DropDown;
