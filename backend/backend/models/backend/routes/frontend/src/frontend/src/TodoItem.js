export default function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li>
      <span
        style={{
          cursor: "pointer",
          textDecoration: todo.completed ? "line-through" : "none"
        }}
        onClick={() => toggleComplete(todo)}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo._id)}>❌</button>
    </li>
  );
}
