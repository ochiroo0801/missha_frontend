import styled from "styled-components";

const Top = styled.div`
  background: #f8f8f8;

  .container {
    height: 50px;
    display: flex;
    align-items: center;

    p {
      color: #999999;
    }

    .frontSide {
      display: flex;

      p:nth-child(2) {
        padding-left: 30px;
      }
    }

    .backSide {
      display: flex;

      .item {
        display: flex;
        margin-left: 20px;
        color: #999999;

        .icon {
          color: #999999;
          font-size: 14px;
        }
      }
    }
    justify-content: space-between;
  }

  .back {
    cursor: pointer;
  }

  .title {
    font-size: 11px;
  }

  .auth {
    cursor: pointer;
  }

  .auth img {
    max-width: 30px;
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  z-index: 9999;

  .frontSide {
    display: flex;
    align-items: center;

    .burgerMenu {
      width: 25px;
      height: 20px;
      margin-right: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      span {
        width: 100%;
        height: 4px;
        background: #333;
      }
    }
  }

  .backSide {
    display: flex;
    align-items: center;
    color: #333;

    ul {
      display: flex;
      list-style: none;

      li {
        margin-right: 40px;
      }
    }

    .tools {
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 24px;

      .item {
        margin-left: 20px;
        cursor: pointer;
      }
    }
  }
`;

export default Top;
