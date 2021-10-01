import styled from 'styled-components';

export const Button = styled.button`
  height: 32px;
  width: 32px;
  display: flex;
  border: 1px solid #fff;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  transition: 200ms all ease;
  border-radius: 4px;
  color: var(--secondary);
  :hover {
    background: #f1f2f5;
    border: 1px solid #cdced9;
  }
`;
