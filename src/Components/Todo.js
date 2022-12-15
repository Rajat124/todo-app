import React from "react";
import style from "../style.module.css";

export const Todo = ({ todoItem, todoList, setTodoList }) => {
  const deleteTodo = () => {
    setTodoList(todoList.filter((item) => item.id !== todoItem.id));
  };
  return (
    <div>
      <div className={style.main}>
        <div className={style.todoitem}>
          <h3 className={style.todoname}>{todoItem.name}</h3>
          <button onClick={deleteTodo} className={style.deletebutton}>
            ❎
          </button>
        </div>
      </div>
    </div>
  );
};
