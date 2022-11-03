import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useRecoilCallback } from "recoil";
import { todoListSelector } from "./recoil";
import { v4 } from "uuid";

const Input = () => {
  const [value, setValue] = useState("");

  const addTodo = useRecoilCallback(
    ({ set }) => async (task: string) => {
      const id = v4();
      set(todoListSelector(id), { id, task, isDone: false });
    },
    []
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      addTodo(value);
      setValue("");
    },
    [value]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력해주세요"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

export default React.memo(Input);
