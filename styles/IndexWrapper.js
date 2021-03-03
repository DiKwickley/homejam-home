import styled from "styled-components";

export const IndexWrapper = styled.div`
  /* min-height: 200vh; */
  .intro {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-image: linear-gradient(
        180deg,
        rgba(5, 11, 20, 0.28) 0%,
        rgba(1, 13, 32, 0.69) 67.53%,
        #0a0b1a 85.33%
      ),
      url("/home-bg-img.png");

    background-position: top;
    background-repeat: no-repeat;
    background-size: 100% auto;
    /* background-size: cover; */

    /* background-color: red; */
    .heading {
      font-family: Libre Baskerville;
      font-size: 80px;
      font-weight: 500;
      color: white;
      line-height: 96px;
      margin-top: 240px;
      margin-left: 150px;
    }
    .sub-heading {
      width: 610px;
      font-family: Nunito;
      font-size: 24px;
      line-height: 32px;
      color: white;
      opacity: 0.6;
      /* margin-top: 25px; */
      margin-left: 150px;
    }
    .progress-div {
      margin-top: 250px;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }

  .upcoming {
    display: flex;
    flex-direction: column;
    padding: 0 150px;
    margin-top: 120px;

    .heading-div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .heading-group {
        .heading {
          font-family: Libre Baskerville;
          font-weight: 400;
          font-size: 32px;
          line-height: 40px;
          color: white;
        }
        .heading-underline {
          margin-top: 3px;
          border: 1.5px solid #0259eb;
          background-color: #0259eb;
          width: 50px;
        }
      }
      .util {
        color: #e5c558;
        cursor: pointer;
      }
    }

    .cards {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      /* overflow-x: auto; this in mobile view*/
      margin-bottom: 100px;
      flex-wrap: wrap;

      /* flex-wrap: wrap; */
    }
  }
`;
