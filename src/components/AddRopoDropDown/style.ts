import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.form`
  h4 {
    font-size: 18px;
  }
  @keyframes FadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  border-radius: 4px;
  background: #fff;
  width: 448px;
  position: absolute;
  top: 40px;
  right: 0px;
  z-index: 9999;
  box-shadow: 0 1px 5px -1px rgb(0 0 0 / 30%);
  animation-name: FadeIn;
  animation-duration: 300ms;

  .group {
    padding: 9px 24px;
    margin-top: 16px;
    display: flex;
    flex-direction: column;

    label {
      color: var(--dark);
      font-weight: 400;
      span {
        color: var(--warning);
      }
    }
  }
  footer {
    padding: 9px 24px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button + button {
      margin-left: 16px;
    }
  }
`;
