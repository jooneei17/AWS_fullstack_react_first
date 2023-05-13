// import { createStore } from "redux";

// console.log("hello parcel");

// //DOM 레퍼런스 만들기
// const divToggle = document.querySelector(".toggle");
// const counter = document.querySelector("h1");
// const btnIncrease = document.querySelector("#increase");
// const btnDecrease = document.querySelector("#decrease");

// //액션 타입과 액션 생성 함수 정의
// const TOGGLE_SWITCH = "TOGGLE_SWITCH";
// const INCREASE = "INCREASE";
// const DECREASE = "DECREASE";

// const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
// const increase = (difference) => ({ type: INCREASE, difference });
// const decrease = () => ({ type: DECREASE });

// // 초깃값 설정
// const initialState = {
//   toggle: false,
//   counter: 0,
// };

// //리듀서 함수 정의
// //state가 undefined일 때는 initialState를 기본 값으로 사용
// function reducer(state = initialState, action) {
//   //action.type에 따라 다른 작업을 처리
//   switch (action.type) {
//     case TOGGLE_SWITCH:
//       return {
//         ...state, //불변성 유지
//         toggle: !state.toggle,
//       };
//     case INCREASE:
//       return {
//         ...state,
//         counter: state.counter + action.difference,
//       };
//     case DECREASE:
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     default:
//       return state;
//   }
// }

// //스토어 만들기
// const store = createStore(reducer);
// //render 함수 만들기
// const render = () => {
//   const state = store.getState(); //현재 상태 불러옴
//   //토글 처리
//   if (state.toggle) {
//     console.log("add");
//     divToggle.classList.add("active");
//     console.log(divToggle.classList);
//   } else {
//     console.log("remove");
//     divToggle.classList.remove("active");
//     console.log(divToggle.classList);
//   }
//   //카운터 처리
//   counter.innerText = state.counter;
// };

// // const listener = () => {
// //   console.log("상태가 업데이트 됨");
// // };
// // const unsubscribe = store.subscribe(listener);
// // unsubscribe(); // 추후 구독을 비활성화할 때 함수를 호출
// render();
// store.subscribe(render);

// divToggle.onclick = () => {
//   console.log("토글");
//   store.dispatch(toggleSwitch());
// };
// btnIncrease.onclick = () => {
//   console.log("증가");
//   store.dispatch(increase(1));
// };
// btnDecrease.onclick = () => {
//   console.log("감소");
//   store.dispatch(decrease());
// };

import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션 이름
// 이름은 문자열 형태로, 주로 대문자로 작성한다.
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 생성 함수
// type 값을 반드시 가지고 있어야 한다.
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초기 값 설정
const initialState = {
  toggle: false,
  counter: 0,
};

// 리듀서 함수 정의
// 리듀서 함수가 맨 처음 호출될 때 state 값은 undefined 이다.
// state가 undefined라면 initailState를 기본 값으로 설정한다.

// 불변성 유지를 해야하는데 구조가 깊어지면 굉장히 번거롭고
// 가독성이 저하되기 때문에, 리덕스 상태는 최대한
// 깊지 않은 구조로 설게를 하고, 만약 깊어지거나 배열도 함께
// 다루는 경우 immer를 사용하면 더욱 쉽게 사용이 가능하다.
function reducer(state = initialState, action) {
  // action.type에 따른 분기 처리, 불변성 유지를 지켜주어야한다.
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      };

    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

// 스토어 생성, 인자는 리듀서 함수
const store = createStore(reducer);

const render = () => {
  const state = store.getState(); // 현재 상태를 받아옴

  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }

  counter.innerText = state.counter;
};

render();

// 스토어의 상태가 바뀔 때 마다 render함수를 호출한다.
// 함수형태의 값을 전달한다.
// 추후 액션이 발생하여 상태가 업데이트 될 때 마다 호출된다.
store.subscribe(render);

divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
