import styled from '@emotion/styled';

export const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  padding: 16px;
  margin-bottom: 20px;
  border: 4px dotted var(--darkGreen);

  input {
    margin-left: 20px;
    font-size: 18px;
    padding: 8px 16px;
    max-width: 100%;
    flex-grow: 1;
    border-radius: 4px;
    outline: none;
    border: 1px solid var(--darkGreen);
    transition: border-color var(--transition);

    &:focus-within {
      border-color: var(--darkPink);
    }
  }
`;
