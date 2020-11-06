import React from "react";
import { MainViewLeft, MainViewLeftSubjectBox, MainSubList } from "../../styled-comp";

interface Props {
  list: string[];
}

function LeftView({ list }: Props) {
  return (
    <MainViewLeft>
      <div className="main-left-slo">slo</div>
      <MainViewLeftSubjectBox>
        {list.map((e) => (
          <MainSubList>{e}</MainSubList>
        ))}
      </MainViewLeftSubjectBox>
    </MainViewLeft>
  );
}

export default LeftView;
