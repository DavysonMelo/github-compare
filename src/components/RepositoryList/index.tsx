import React, { useState } from 'react';
import GridCard from '../GridCard';
import RepoListItem from '../RepoListItem';
import { GridContainer, ListContainer } from './style';

const RepositoryList: React.FC = () => {
  const renderGrid = () => {
    return (
      <GridContainer>
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
      </GridContainer>
    );
  };

  const renderList = () => {
    return (
      <ListContainer>
        <RepoListItem />
        <RepoListItem />
        <RepoListItem />
        <RepoListItem />
        <RepoListItem />
        <RepoListItem />
        <RepoListItem />
        <RepoListItem />
      </ListContainer>
    );
  };

  return renderGrid();
};

export default RepositoryList;
