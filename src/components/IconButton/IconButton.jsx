export const IconButton = ({ children, onClick, ...allyProps }) => {
  return (
    <button onClick={onClick} type="button" {...allyProps}>
      {children}
    </button>
  );
};
