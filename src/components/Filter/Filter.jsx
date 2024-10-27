import { FilterLabel } from './Filter.styled';

export const Filter = ({ filter, changeFilter }) => {
  return (
    <FilterLabel>
      Filter
      <input type="text" name="filter" value={filter} onChange={changeFilter} />
    </FilterLabel>
  );
};
