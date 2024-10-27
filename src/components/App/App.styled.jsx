import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  padding: 16px 12px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 736px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding: 32px 20px;
  }
`;

export const Title = styled.h1`
  font-size: 60px;
  text-transform: uppercase;
  text-decoration: underline;
  text-align: center;
  margin-bottom: 20px;
`;

export const InfoContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  border: 4px dotted var(--darkGreen);

  p {
    font-size: 24px;
    font-weight: 600;

    span {
      color: var(--yellow);
    }
  }
`;
