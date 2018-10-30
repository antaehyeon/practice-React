console.log("ON MAIN JAVASCRIPT");

const elNumber = document.getElementById("number");
const btnIncrement = document.getElementById("increment");
const btnDecrement = document.getElementById("decrement");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// 액션 객체를 만들어주는 액션 생성 함수
const increment = diff => ({ type: INCREMENT, diff: diff });
const decrement = () => ({ type: DECREMENT });

// INIT DATA
const initialState = {
  number: 0
};

/* 
   이것은 리듀서 함수입니다.
   state 와 action 을 파라미터로 받아옵니다.
   그리고 그에 따라 다음 상태를 정의 한 다음에 반환해줍니다.
*/

// 여기에 state = initialState 는, 파라미터의 기본값을 지정해줍니다. (defaultParameter)
// 불변성을 항상 유지시켜주어야 합니다
const counter = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case INCREMENT:
      return {
        number: state.number + action.diff
      };
    case DECREMENT:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
};

// CREATE STORE
const { createStore } = Redux;
// STORE ADD 'COUNTER' METHOD
// 미들웨어도 넣을 수 있습니다
const store = createStore(counter);

// Listener Method
const render = () => {
  elNumber.innerText = store.getState().number;
  console.log("RUN RENDER");
};

// subscribe [REDUX STORE]
store.subscribe(render);

// INIT RENDERING
render();

/*
    EVENT LISTENER
*/
btnIncrement.addEventListener("click", () => {
  // STORE CALL DISPATCH - INCREMENT
  store.dispatch(increment(25));
});

btnDecrement.addEventListener("click", () => {
  store.dispatch(decrement());
});
