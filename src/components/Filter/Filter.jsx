export const Filter = ({ filter, changeFilter }) => {
  return (
    <label>
      Filter
      <input type="text" name="filter" value={filter} onChange={changeFilter} />
    </label>
  );
};
