import styled from "styled-components";

export const NavBarWrapper = styled.div`
  display: flex;
  margin-top: 5px;
  justify-content: row;
  align-items: center;
  justify-content: space-between;

  .logo {
    margin-left: 150px;
  }
  .nav-group {
    display: flex;
    margin-right: 150px;
    align-items: center;
    .nav-item {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      width: 100px;
    }
  }
`;
