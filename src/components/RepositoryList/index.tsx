import React from 'react';
import { useListContext } from '../../contexts/listViewContext';
import GridCard from '../GridCard';
import RepoListItem from '../RepoListItem';
import { GridContainer, ListContainer } from './style';

const RepositoryList: React.FC = () => {
  const { listType } = useListContext();
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

  return listType === 'grid' ? renderGrid() : renderList();
};

export default RepositoryList;
