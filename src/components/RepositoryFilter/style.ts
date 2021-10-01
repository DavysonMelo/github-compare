import styled from 'styled-components';

export const Container = styled.section`
  .trigger {
    background: transparent;
    border: 1px solid #fff;
    border-radius: 4px;
    padding: 8px 12px;
    color: var(--secondary);

    font-weight: 500;
    margin-bottom: 2px;
    transition: 200ms all ease;
    display: flex;
    align-items: center;
    :hover {
      background: #f1f2f5;
      border: 1px solid #cdced9;
    }
    .icon {
      margin-left: 10px;
    }
  }
`;
