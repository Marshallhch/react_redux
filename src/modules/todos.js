//1. define action type
const CHANGE_INPUT = "todos/CHANGE_INPUT"; //인풋 값 변경
const INSERT = "todos/INSERT"; //새로운 todo 등록
const TOGGLE = "todos/TOGGLE"; //체크/체크해제
const REMOVE = "todos/REMOVE"; //제거

//2. defint action constructor function
export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

let id = 3; //insert 호출 시 1씩 더해줌 - dummy data 2개 입력 후 3번
export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggle = (id) => ({
  type: TOGGLE,
  id,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

//3. define initial State reducer function
