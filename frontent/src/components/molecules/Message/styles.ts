import styled from "styled-components";

export const Container = styled.div`
  .message {
    width: 46%;
    margin: 5px auto;
    background: #4280ff;
    padding: 10px;
    color: #fff;
    position: relative;

    &.sb1:before {
      content: "";
      border-radius: 0px 5px 5px 0;
      width: 0px;
      height: 0px;
      position: absolute;
      border-left: 5px solid #4280ff;
      border-right: 5px solid transparent;
      border-top: 5px solid #4280ff;
      border-bottom: 5px solid transparent;
      right: -10px;
      top: 0px;
    }
    &.sb2:before {
      content: "";
      width: 0px;
      height: 0px;
      position: absolute;
      border-left: 5px solid transparent;
      border-right: 5px solid #30ba83;
      border-top: 5px solid #30ba83;
      border-bottom: 5px solid transparent;
      left: -10px;
      top: 0px;
    }

    &.left {
      margin-left: 10px;
      background-color: #30ba83;
      border-radius: 0px 10px 10px 10px;
    }
    &.right {
      align-self: flex-end;
      margin-right: 10px;
      border-radius: 10px 0px 10px 10px;
    }
  }
`;
