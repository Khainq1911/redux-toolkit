import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { addTodo } from "./todoSlice"; 
import { useState } from "react";

export default function TodoPage() {
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todo.value);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input)); 
      setInput(""); 
    }
  };

  return (
    <div>
      <h1>Todo page</h1>

      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập công việc"
        />
        <button type="button" onClick={handleAddTodo}>
          Add
        </button>
      </div>

      <h2>Todo List</h2>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
