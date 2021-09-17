import React from "react";

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input type='checkbox' />
      <span>Example Text</span>
      <button>Delete</button>
    </div>
  );
};

const Todos = ({
  input, //입력 텍스트
  todos, //할 일 목록
  onChangeInput,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' />
        <button type='submit'>Submit</button>
      </form>
      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default Todos;
