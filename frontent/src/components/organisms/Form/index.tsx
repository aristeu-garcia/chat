import React, { useState } from "react";
import { Container } from "./styles";
import DropDown from "../../atoms/Select";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { AiOutlineSend } from "react-icons/ai";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";

const Form: React.FC = () => {
  interface IJoin {
    user: string;
    room: string;
  }
  interface Option {
    value: string;
    label: string;
  }

  const [user, setUser] = useState<string>("");
  const [room, setRoom] = useState<string>("");
  return (
    <Container>
      <img src={logo} width="100px" height="100px" alt="bg"></img>
      <Input
        placeholder="Informe o seu nome"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <DropDown
        options={[
          { label: "React", value: "react" },
          { label: "NodeTS", value: "nodets" },
        ]}
        onChange={(e) => {
          let { value } = e as Option;
          setRoom(value);
        }}
      />
      <Button bg="#2ebb83" borderRadius="5px">
        <Link to={`/${room}/${user}`}>
          <AiOutlineSend size={22} color="#FFFF" />
        </Link>
      </Button>
    </Container>
  );
};
export default Form;
