import styled from "styled-components";
import bg from "../../assets/bgChat.jpg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;

  .container-chat {
    width: 90%;
    height: 100%;
    min-width: 320px;
    /* border-radius: 20px; */

    .top-bar {
      height: 50px;
      /* background-color: blue; */
      display: flex;
      text-align: center;
      padding-left: 10px;
      padding-right: 10px;
      align-items: center;
      justify-content: space-between;
      color: #ffff;
      font-weight: 800;
      svg {
        fill: #d9dbea;
      }
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        /* border: 1px solid red; */
        height: 30px;
        width: 30px;
        background-color: #4181f6;
        border-radius: 10px;
        svg {
          fill: #ffffff;
        }
      }
    }
    .down-bar {
      display: flex;
      border-radius: 20px;
      align-items: center;
      justify-content: space-evenly;
      position: absolute;
      bottom: 5px;
      button {
        border: none;
      }
      /* background: #f1f1f2; */
      background-color: rgba(0, 0, 0, 0.5);

      backdrop-filter: blur(5px);
      width: 90%;
      height: 70px;
      min-width: 320px;
      input {
        border: none;
        padding: 10px;
        border-radius: 10px;
        width: 80%;
      }
      svg {
        fill: #FFFF;
      }
    }
    .container-messages {
      /* background: pink; */
      top: 50px;
      bottom: 70px;
      width: 90%;
      padding-right: 5px;
      padding-left: 5px;
      min-width: 320px;
      position: absolute;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      
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
    }
  }
`;
