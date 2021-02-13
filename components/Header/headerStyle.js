import styled from "styled-components";

export const Div = styled.div`
  box-shadow: -2px -2px 10px ${(props) => props.theme.grey};
`;

const Top = styled.div`
  background: ${(props) => props.theme.black};

  .container {
    height: 50px;
    display: flex;
    align-items: center;

    p {
      color: #fff;
    }

    .frontSide {
      display: flex;

      p:nth-child(2) {
        padding-left: 30px;
      }
    }

    .backSide {
      display: flex;
      align-items: center;

      .item {
        display: flex;
        margin-left: 20px;

        .icon {
          color: #fff;
          font-size: 14px;
        }

        .icon_basket {
          color: #fff;
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

    .item {
      margin-left: 20px;
      cursor: pointer;
    }
  }
`;

export default Top;
