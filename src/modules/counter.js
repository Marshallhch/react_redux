//1. define action type
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//2. define action constructor function
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//3. define initial state and reducer function
const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

//export는 단일한 하나의 함수만 내보낸다
export default counter;
