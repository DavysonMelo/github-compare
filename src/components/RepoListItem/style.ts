import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 90%;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 5px;

  .card {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 5px;

  #left {
    span {
      font-weight: 500;
      font-size: 14px;
      margin-left: 4px;
    }
  }

  #right {
    button {
      width: 32px;
      height: 32px;
      color: var(--secondary);
      background: transparent;
      border: 0px;
      border-radius: 4px;
      transition: all 200ms ease;
      :hover {
        background: rgba(39, 40, 51, 0.04);
      }
    }
  }
`;

export const Body = styled.div`
  padding: 12px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  ul {
    display: flex;
    max-width: 90%;
    li {
      p {
        font-weight: 500;
        color: var(--secondary);
        span {
          font-weight: 400;
        }
      }
    }
    li + li {
      margin-left: 30px;
    }
  }
`;
