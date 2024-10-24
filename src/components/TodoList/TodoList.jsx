export const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul>
    {todos.map(({ id, text, completed }) => (
      <li key={id}>
        <label>
          <input
            type="checkbox"
            name="completed"
            checked={completed}
            onChange={() => onToggleCompleted(id)}
          />
        </label>
        <p>{text}</p>
        <button type="button" onClick={() => onDeleteTodo(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);
