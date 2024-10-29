import styled from '@emotion/styled';

export const Form = styled.form`
  margin-top: 16px;

  label {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 12px;
    font-size: 20px;
  }

  input {
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

  textarea {
    resize: none;
    height: 150px;
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

export const CreateButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 16px;
  background-color: var(--yellow);
  font-size: 20px;
  font-weight: 600;
  color: var(--darkGreen);
`;
