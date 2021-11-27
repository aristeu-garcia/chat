import React, { Component } from "react";
import Select from "react-select";
import { Container } from "./styles";

interface Option {
  value: string;
  label: string;
}

interface Options {
  options: Option[];
}

const DropDown: React.FC<Options>= ({ options }) => (
  <Container>
    <Select options={options} />
  </Container>
);
export default DropDown;
