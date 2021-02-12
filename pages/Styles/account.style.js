import styled from "styled-components";

const Div = styled.div`
  display: flex;

  .profile {
    flex: 0.4;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;

    .image {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: #000;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    .name {
      font-size: 18px;
      font-weight: 500;
      margin: 40px 0 10px 0;
    }

    .menu {
      padding-top: 50px;
      width: 80%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

      .item {
        width: 100%;
        text-align: center;
        border: 1px solid #ddd;
        cursor: pointer;
        background: #fff;
        padding: 30px 0;
        color: #ddd;

        :hover {
          color: #333;
          border: none;
          border-radius: 10px;
          transform: scale(1.1);
          box-shadow: 0 0 20px #ddd;
        }
      }
    }

    .logout {
      margin-top: 40px;
      font-weight: 700;
    }
  }

  .tabs {
    flex: 0.6;
    background: #333;
  }
`;

export default Div;
