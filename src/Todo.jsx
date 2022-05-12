import { observer } from "mobx-react-lite";
import React from "react";
import todo from "./store/todo";
import "./App.css";

const Todo = observer(() => {
  return (
      <div className="todos">
          <button onClick={()=>todo.fetchToDos()}>fetch todos</button>
      {todo.todos.map((t) => (
        <div className="todo" key={t.id}>
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() => todo.completeTodo(t.id)}
          />
          {t.title + " "}
          <button className="todo-btn" onClick={() => todo.removeTodo(t.id)}>
            x
          </button>
        </div>
      ))}
    </div>
  );
});

export default Todo;
