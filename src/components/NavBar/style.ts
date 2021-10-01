import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #fff;
  height: 64px;
  padding: 0px 40px 0px 40px;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      margin-left: 28px;
    }
  }

  #search {
    width: 35%;
  }

  #title {
    color: var(--secondary);
    font-weight: 500;
  }

  #menu {
    width: 20%;
    margin-left: 15px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;

    li {
      display: flex;
      align-items: center;
    }
  }
`;
