import React from "react";
import { Itodo } from "../interfeses";
import styles from "./TodoList.module.css";
import close from "../close.svg";

type TodoListProps = {
  todos: Itodo[];
  onToggle: (id: number, completed: boolean) => void;
  onRemove: (id: number) => void;
};

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onRemove,
  onToggle,
}) => {
  if (todos.length === 0) {
    return <p>задач нет</p>;
  }
  const removeHendler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  };
  return (
    <ul>
      {todos.map((todo) => {
        let text = "";
        let color = "";
        if (todo.completed) {
          text = "line-through";
          color = "rgba(4, 231, 4, 0.322)";
        }
        return (
          <li
            className={styles.todo}
            key={todo.id}
            style={{ textDecoration: text, backgroundColor: color }}
          >
            <label className={styles.string}>
              <div>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onToggle(todo.id, todo.completed)}
                />
                <span>{todo.title}</span>
              </div>
              <div onClick={(event) => removeHendler(event, todo.id)}>
                <img src={close} alt="" height="30px" />
              </div>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
