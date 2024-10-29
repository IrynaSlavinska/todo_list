import styled from '@emotion/styled';

export const TodoGallery = styled.ul`
  display: grid;
  gap: 24px;
  margin-top: 20px;
  padding: 12px;
  border: 4px dotted var(--darkGreen);

  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border: 4px dotted var(--darkPink);
  background-color: var(--lightGray);
  min-height: 120px;
  color: var(--primaryText);

  h3 {
    font-size: 20px;
    text-align: center;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    text-align: center;
    line-height: 1.4;
    word-break: break-word;
    overflow-wrap: break-word;
    display: -webkit-box;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1200px) {
    padding: 12px;
  }
`;
