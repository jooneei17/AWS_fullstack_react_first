// import React from "react";
// import Counter from "./Counter";
// import { connect } from "react-redux";
// import { increase, decrease } from "../modules/counter";
// import { bindActionCreators } from "redux";

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// const mapDispatchToProps = { increase, decrease };

//   bindActionCreators({ increase, decrease }, dispatch);
// {
// 임시 함수
//   increase: () => {
//     // console.log("increase");
//     dispatch(increase());
//   },
//   decrease: () => {
//     // console.log("decrease");
//     dispatch(decrease());
//   },
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import { increase, decrease } from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};
export default CounterContainer;
