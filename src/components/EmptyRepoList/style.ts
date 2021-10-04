import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  h4 {
    margin-top: 40px;
    font-size: 20px;
    color: var(--dark);
  }
  p {
    font-size: 16px;
    line-height: 30px;
    color: var(--secondary);
    max-width: 340px;
    text-align: center;
  }
`;
