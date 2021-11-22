import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  .container-chat {
    width: 30%;
    height: 100%;
    min-width: 320px;
    .down-bar {
      display: flex;
      border-radius: 20px;
      align-items: center;
      justify-content: space-evenly;
      position: absolute;
      bottom: 0;
      /* background: #f1f1f2; */
      background-color: lightcyan;
      width: 30%;
      height: 70px;
      min-width: 320px;
      input {
        border: none;
        padding: 10px;
        border-radius: 10px;
        width: 80%;
      }
      svg {
        fill: blue;
      }
    }
    .container-messages {
      background: pink;
      top: 70px;
      bottom: 70px;
      width: 30%;

      min-width: 320px;
      position: absolute;
      display: flex;
      flex-direction: column;

      .message {
        width: 46%;
        margin: 5px auto;
        background: #00bfb6;
        padding: 10px;
        color: #fff;
        position: relative;
        border-radius: 10px 0px 10px 10px;
        &.sb1:before {
          content: "";
          border-radius: 0px 5px 5px 0;
          width: 0px;
          height: 0px;
          position: absolute;
          border-left: 5px solid #00bfb6;
          border-right: 5px solid transparent;
          border-top: 5px solid #00bfb6;
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
          border-right: 5px solid #00bfb6;
          border-top: 5px solid #00bfb6;
          border-bottom: 5px solid transparent;
          left: -10px;
          top: 0px;
        }

        &.left {
          margin-left: 10px;
        }
        &.right {
          align-self: flex-end;
          margin-right: 10px;
        }
      }
    }
  }
`;
