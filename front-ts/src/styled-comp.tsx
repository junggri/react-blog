import styled from "styled-components";

//interface
interface Width {
  width: string;
}

//style-componenet

export const TopView = styled.div<Width>`
  border: 1px solid black;
  margin: 0 auto;
  height: 320px;
  width: ${(props) => props.width};
  max-width: ${(props) => props.width};
  @media (max-width: ${window.screen.width * 0.7}px) {
    width: ${window.screen.width * 0.5}px;
  }
`;

export const MainView = styled.div<Width>`
  border: 1px solid black;
  margin: 0 auto;
  /* height: 200px; */
  width: ${(props) => props.width};
  max-width: ${(props) => props.width};
  display: flex;
`;

export const MainViewLeft = styled.section`
  flex-grow: 0.3;
  & .asd {
    color: red;
    border: 1px solid black;
    text-align: center;
    margin-top: 33px;
  }
`;

export const MainViewCenter = styled.section`
  border: 1px solid black;
  flex-grow: 1;
`;

export const MainViewRight = styled.section`
  flex-grow: 0.3;
`;
