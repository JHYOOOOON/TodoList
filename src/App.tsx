import { useRecoilValue } from "recoil";
import { todoIdListAtom } from "./recoil";
import TodoListItem from "./TodoListItem";
import Input from "./Input";
import "./styles.css";

export default function App() {
  const todoIdList = useRecoilValue(todoIdListAtom);
  return (
    <div className="App">
      <h1>오늘 할 일</h1>
      <Input />
      <ul>
        {todoIdList.map((id, index) => (
          <TodoListItem id={id} key={index} />
        ))}
      </ul>
    </div>
  );
}
