import React from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { todoListSelector } from "./recoil";
import { RiDeleteBinFill } from "react-icons/ri";

type TodoListItemProps = {
  id: string;
};

const TodoListItem = ({ id }: TodoListItemProps) => {
  const [todo, setTodo] = useRecoilState(todoListSelector(id));
  const deleteTodo = useResetRecoilState(todoListSelector(id));

  const handleCheckBox = () => {
    setTodo((prev) => ({ ...prev, isDone: !prev.isDone }));
  };

  const handleDelete = () => {
    deleteTodo();
  };

  return (
    <li className={`${todo.isDone && "isDone"}`}>
      <div>
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={handleCheckBox}
        />
        <p>{todo.task}</p>
      </div>
      <div>
        <button onClick={handleDelete}>
          <RiDeleteBinFill />
        </button>
      </div>
    </li>
  );
};

export default React.memo(TodoListItem);
