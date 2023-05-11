import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

// export에 바로 function을 쓰는 방식
// export default function useInputs(initialForm) {
//   const [state, dispatch] = useReducer(reducer, { name: "", nickname: "" });
//   const onChange = (e) => dispatch(e.target);
//   return [state, onChange];
// }

const useInputs = (initialForm) => {
  const [state, dispatch] = useReducer(reducer, { name: "", nickname: "" });
  const onChange = (e) => dispatch(e.target);
  return [state, onChange];
};

export default useInputs;
