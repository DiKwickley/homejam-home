import styled from "styled-components";

export const NavBarWrapper = styled.div`
  display: flex;
  margin-top: 5px;
  justify-content: row;
  align-items: center;
  justify-content: space-between;

  .logo {
    margin-left: 150px;
    @media only screen and (max-width: 425px) {
      margin-left: 16px;
    }
  }
  .nav-group {
    display: flex;
    margin-right: 150px;
    align-items: center;
    @media only screen and (max-width: 425px) {
      margin-right: 16px;
    }

    .nav-item {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      width: 100px;
      @media only screen and (max-width: 425px) {
        width: 50px;
      }
    }
    .hide-mobile {
      @media only screen and (max-width: 425px) {
        display: none;
      }
    }
    .show-mobile {
      display: none;
      @media only screen and (max-width: 425px) {
        display: flex;
      }
    }
  }
`;
