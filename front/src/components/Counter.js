import React from "react";
//프리젠테이셔널 컴포넌트
//리덕스 스토어에 직젖ㅂ적을 접근하지 않고
//접근하여 사용하는 컴포넌트
//UI에 집중한다<div className="">

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const onChange = (e) => {
    //문자열을 10진수의 수로 바꾼다
    onSetDiff(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} min="1" onChange={onChange} />
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
