import styled from "styled-components";

export const ShowCardWrapper = styled.div`
  .card {
    color: white;
    width: 245px;
    border: 1px solid white;
    border-radius: 8px;
    margin: 40px 0;
    margin-right: 35px;

    background-color: #111229;
    box-shadow: 10px -10px #301a68;
    .card-img {
      width: 100%;
      border-radius: 8px 8px 0px 0px;
    }

    .info {
      padding: 16px;
      .tag {
        padding: 1px 4px;
        background-color: #e5c558;
        color: #682f26;
        font-family: Nunito;
        font-size: 12px;
        font-weight: 600;
      }
      .name {
        font-family: Libre Baskerville;
        font-size: 20px;
        line-height: 32px;
        margin: 10px 0;
      }
      .utils {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 5px;
        .more {
          display: flex;
          align-items: center;
          font-size: 16px;
          color: #0259eb;
          cursor: pointer;
        }
        .book {
          padding-left: 15px;
          border-left: 1px solid rgba(255, 255, 255, 0.2);
          color: pink;
          cursor: pointer;
        }
      }
    }
  }
`;
