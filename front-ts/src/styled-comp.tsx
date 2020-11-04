import styled from "styled-components";

interface Width {
  width: string;
}

export const TopView = styled.div<Width>`
  border: 1px solid black;
  background-color: red;
  margin: 0 auto;
  height: 320px;
  max-width: ${(props) => props.width};
  /* @media (max-width: ${window.screen.width * 0.7}px) {
      width: ${window.screen.width * 0.5}px;
  /* } */
`;

export const MainView = styled.div<Width>`
  border: 1px solid black;
  margin: 0 auto;
  height: 200px;
  max-width: ${(props) => props.width};
  display: flex;
`;

export const MainViewLeft = styled.section`
  border: 1px solid black;
  flex-grow: 0.25;
`;

export const MainViewCenter = styled.section`
  border: 1px solid black;
  flex-grow: 1;
`;
