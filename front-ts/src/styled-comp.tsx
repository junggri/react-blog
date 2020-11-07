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

//main-view-comps

export const MainView = styled.div<Width>`
  margin: 0 auto;
  /* height: 200px; */
  width: ${(props) => props.width};
  max-width: ${(props) => props.width};
  display: flex;
  justify-content: space-between;
`;

//main-view-top
export const MainViewLeft = styled.section`
  width: 250px;

  & .main-left-slo {
    font-size: 32px;
    text-align: center;
    margin-top: 33px;
  }
`;

export const MainViewLeftSubjectBox = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 40px;
`;

export const MainSubList = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: inline-block;
  width: 100px;
  padding: 7px;
  margin-bottom: 13px;
  &:hover {
    cursor: pointer;
  }
  & > .list-num {
    color: red;
    margin-right: 5px;
  }
`;

//main-view-left

export const MainViewCenter = styled.section`
  border: 1px solid red;
`;

//center

export const MainViewRight = styled.section`
  border: 1px solid red;
  width: 250px;
`;

//
