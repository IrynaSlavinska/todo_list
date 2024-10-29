import { IconButton } from 'components/IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

export const Todo = ({
  completed,
  onToggleCompleted,
  title,
  text,
  onDeleteTodo,
}) => {
  return (
    <>
      <label>
        <input
          type="checkbox"
          name="completed"
          checked={completed}
          onChange={onToggleCompleted}
        />
      </label>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <IconButton onClick={onDeleteTodo}>
        <DeleteIcon style={{ width: 24, height: 24, fill: 'green' }} />
      </IconButton>
    </>
  );
};
