import { Button } from './IconButton.styled';

export const IconButton = ({ children, onClick, ...allyProps }) => {
  return (
    <Button onClick={onClick} type="button" {...allyProps}>
      {children}
    </Button>
  );
};
