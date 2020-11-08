import React from "react";
import { MainViewLeft, MainViewLeftSubjectBox, MainSubList } from "../../styled-comp";

interface Props {
  list: string[];
}

function LeftView({ list }: Props) {
  return (
    <MainViewLeft>
      <div className="main-left-slo">CONTENT</div>
      <MainViewLeftSubjectBox>
        {list.map((e, i) => (
          <MainSubList key={i}>
            <span className="list-num">{i}</span>
            {e}
          </MainSubList>
        ))}
      </MainViewLeftSubjectBox>
    </MainViewLeft>
  );
}

export default LeftView;
