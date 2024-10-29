import { Todo } from 'components/Todo';
import { TodoGallery, TodoItem } from './TodoList.styled';

export const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <TodoGallery>
    {todos.map(({ id, title, text, completed }) => (
      <TodoItem key={id}>
        <Todo
          completed={completed}
          title={title}
          text={text}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDeleteTodo={() => onDeleteTodo(id)}
        />
      </TodoItem>
    ))}
  </TodoGallery>
);
