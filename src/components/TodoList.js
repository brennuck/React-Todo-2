import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.data.map(todo => (
        <Todo key={todo.id} data={todo} toggleTodo={props.toggleTodo} />
      ))}
      <button className="clear-btn" onClick={props.clearTodo}>
        Clear Purchased
      </button>
    </div>
  );
};

export default TodoList;
