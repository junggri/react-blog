import styled from "styled-components";

interface Top {
  width: string;
}

export const TopView = styled.div<Top>`
  border: 1px solid black;
  margin: 0 auto;
  max-width: ${(props) => props.width};

  /* @media (max-width: ${window.screen.width * 0.7}px) {
    width: ${window.screen.width * 0.5}px;
/* } */
`;
