import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  min-width: 321px;
  margin: 10px 0 0 10px;

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
  border-bottom: 1px solid #e5e5e5;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 5px;

  section {
    display: flex;
    span {
      font-size: 14px;
      margin-left: 4px;
      font-weight: 500;
      max-width: 80%;
    }

    button {
      width: 32px;
      height: 32px;
      background: transparent;
      color: var(--secondary);
      border: 0px;
      border-radius: 4px;
      transition: all 200ms ease;
      :hover {
        background: rgba(39, 40, 51, 0.04);
      }
    }
  }

  #left {
    width: 75%;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const Body = styled.div`
  padding: 12px 16px;
  ul {
    li {
      p {
        font-weight: 600;

        span {
          font-weight: 400;
          margin-left: 10px;
        }
      }
    }
  }
`;
