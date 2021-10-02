import React from 'react';
import NavBar from '../../components/NavBar';
import RepositoryList from '../../components/RepositoryList';
import { Body, Container } from './style';

const Home: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Body>
        <RepositoryList />
      </Body>
    </Container>
  );
};

export default Home;
