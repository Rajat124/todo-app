import React from "react";
import style from "../style.module.css";
import shortid from "shortid";

export const Form = ({ todo, setTodo, todoList, setTodoList }) => {
  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, { name: todo, id: shortid.generate() }]);
    console.log(todoList);
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={style.todoform}>
        <input
          value={todo}
          onChange={handleChange}
          className={style.todoinput}
          placeholder="Add Todo Item"
        ></input>
        <button type="submit" className={style.todobutton}>
          ⬇️
        </button>
      </form>
    </div>
  );
};
