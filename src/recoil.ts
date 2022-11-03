import { atom, atomFamily, DefaultValue, selectorFamily } from "recoil";

type Todo = {
  id: string;
  task: string;
  isDone: boolean;
};

type Id = string;

export const todoIdListAtom = atom<Id[]>({
  key: "atom/todoIdList",
  default: []
});

const todoListAtom = atomFamily<Todo, Id>({
  key: "atomFamily/todoList",
  default: (id) => ({
    id,
    task: "",
    isDone: false
  })
});

export const todoListSelector = selectorFamily<Todo, Id>({
  key: "selectorFamily/todoList",
  get: (id) => ({ get }) => get(todoListAtom(id)),
  set: (id) => ({ get, set, reset }, todo) => {
    if (todo instanceof DefaultValue) {
      reset(todoListAtom(id));
      set(todoIdListAtom, (prev) => prev.filter((todoId) => todoId !== id));
      return;
    }
    set(todoListAtom(id), todo);
    set(todoIdListAtom, (prev) => Array.from(new Set([...prev, id])));
  }
});
