import { useState, useEffect } from "react";
import api from "./api";
import TodoItem from "./TodoItem";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const { data } = await api.get("/");
    setTodos(data);
  };

  const addTodo = async () => {
    if (!text) return;
    const { data } = await api.post("/", { text });
    setTodos([...todos, data]);
    setText("");
  };

  const toggleComplete = async (todo) => {
    const { data } = await api.put(`/${todo._id}`, {
      completed: !todo.completed
    });
    setTodos(todos.map((t) => (t._id === data._id ? data : t)));
  };

  const deleteTodo = async (id) => {
    await api.delete(`/${id}`);
    setTodos(todos.filter((t) => t._id !== id));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div style={{ width: "450px", margin: "40px auto" }}>
      <h1>Todo App ✅</h1>
      <input
        placeholder="Add a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>➕ Add</button>

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
