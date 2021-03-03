import styled from "styled-components";

export const IndexWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap");

  min-height: 200vh;
  .intro {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-image: linear-gradient(to bottom, transparent, #0a0b1b),
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
  }
`;
