import React from "react";
import { Container } from "./styles";
import DropDown from "../../atoms/Select";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { AiOutlineSend} from "react-icons/ai";

const Form: React.FC = () => {
  return (
    <Container>
      <Input />
      <DropDown options={[{ label: "React", value: "react" }]} />
      <Button >
      <AiOutlineSend size={28} color='#2fb984'/>
      </Button>
    </Container>
  );
};
export default Form;
