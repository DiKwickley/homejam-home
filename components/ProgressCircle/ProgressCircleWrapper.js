import styled from "styled-components";

export const ProgressCircleWrapper = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 100%;
  color: white;
  margin: 40px;
  .icon {
  }
  .blue {
    color: blue;
  }
  .number {
    margin: 12px 0;
    font-size: 24px;
    font-family: Libre Baskerville;
  }
  .label {
    font-family: Nunito;
    font-size: 16px;
    opacity: 0.6;
  }
`;
