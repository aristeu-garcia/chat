import React, { useState } from "react";
import { Container } from "./styles";
import DropDown from "../../atoms/Select";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { AiOutlineSend } from "react-icons/ai";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import { appSocket } from "../../../api/socket";
import { IOption } from "../../../interfaces/IMessage";
const Form: React.FC = () => {
  function handleSubmit() {
    appSocket.emit(
      "selected_room",
      {
        room,
        user,
      },
      (response: any) => {
        localStorage.setItem("@auth/user", response.user);
      }
    );
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
          let { value } = e as IOption;
          setRoom(value);
        }}
      />
      <Button bg="#2ebb83" borderRadius="5px">
        <Link to={`/${room}/${user}`} onClick={handleSubmit}>
          <AiOutlineSend size={22} color="#FFFF" />
        </Link>
      </Button>
    </Container>
  );
};
export default Form;
