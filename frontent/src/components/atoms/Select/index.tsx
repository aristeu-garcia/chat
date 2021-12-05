import React from "react";
import Select from "react-select";
import { Container } from "./styles";

import { IOptions } from "../../../interfaces/IDropDown";

const CustomStyle = {
  option: (base: any, state: { isSelected: boolean }) => ({
    ...base,
    backgroundColor: state.isSelected ? "#4683ff" : "#1c2125",
  }),
};

const DropDown: React.FC<IOptions> = ({ options, ...rest }) => (
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
