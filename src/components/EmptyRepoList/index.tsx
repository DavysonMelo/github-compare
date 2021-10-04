import React from 'react';
import { Container } from './style';

import emptyImg from '../../assets/emptyList.svg';

const EmptyRepoList: React.FC = () => {
  return (
    <Container>
      <img src={emptyImg} alt="" />
      <h4>There is still nothing here</h4>
      <p>Add some repositories by clicking add new repository</p>
    </Container>
  );
};

export default EmptyRepoList;
