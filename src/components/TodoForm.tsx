import React, { useRef } from "react";
import styles from "./TodoForm.module.css";

interface TodoFormPrors {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFormPrors> = (props) => {
  // const [title, setTitle] = useState<string>("");

  const ref = useRef<HTMLInputElement>(null);

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   // setTitle(event.target.value);
  //   props.onAdd(event.target.value);
  // };

  const KeyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
      // console.log(title);
      // setTitle("");
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        // onChange={changeHandler}
        // value={title}
        onKeyPress={KeyPressHandler}
        ref={ref}
        type="text"
        id="title"
        placeholder="Введите задачу"
      />
    </div>
  );
};
