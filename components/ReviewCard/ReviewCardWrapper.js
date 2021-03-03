import styled from "styled-components";

export const ReviewCardWrapper = styled.div`
  .card {
    border: 2px solid #e5af56;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 0 25px;
    padding-bottom: 40px;
    width: 330px;
    box-shadow: 10px -10px #5293e8;
    margin-right: 35px;

    .info {
      margin-top: 32px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      .review-img {
        width: 50px;
        height: 50px;
        border-radius: 100%;
      }
      .info-group {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        .name {
          color: white;
          font-family: Libre Baskerville;
        }
        .location {
          color: #e5c558;
          font-size: 11px;
          font-family: Nunito;
          margin-top: 5px;
        }
      }
    }
    .content {
      font-family: Nunito;
      /* line-height: 24px; */
      color: white;
      font-weight: 400;
      margin-top: 25px;
    }
  }
`;
