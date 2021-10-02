import React from 'react';
import NavBar from '../../components/NavBar';
import { Body, Container } from './style';

const Home: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Body />
    </Container>
  );
};

export default Home;
