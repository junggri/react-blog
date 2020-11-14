import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "./Counter";
import { increase, decrease, setDiff } from "../modules/counter";

function CounterContainer() {
  //useSelector는 리덕스 스토어의 상태를 조회한다
  //==state.getStore()

  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));

  const dispatch = useDispatch();
  // 각 액션들을 디스패치하는 함수들을 만드세요
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    ></Counter>
  );
}

export default CounterContainer;
