import { IconButton } from 'components/IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

export const Todo = ({ completed, onToggleCompleted, text, onDeleteTodo }) => {
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
      <p>{text}</p>
      <IconButton onClick={onDeleteTodo}>
        <DeleteIcon style={{ width: 40, height: 40, fill: 'green' }} />
      </IconButton>
    </>
  );
};
