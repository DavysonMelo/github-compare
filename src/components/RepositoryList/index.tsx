import React from 'react';
import { useListContext } from '../../contexts/listViewContext';
import EmptyRepoList from '../EmptyRepoList';
import GridCard from '../GridCard';
import RepoListItem from '../RepoListItem';
import { GridContainer, ListContainer } from './style';

const RepositoryList: React.FC = () => {
  const {
    listType,
    filterAndSort: { repositories },
  } = useListContext();

  const renderGrid = () => {
    return (
      <GridContainer>
        {repositories.map(repo => (
          <GridCard
            id={repo.id}
            key={repo.id}
            name={repo.full_name}
            stars={repo.stargazers_count}
            age={repo.created_at}
            forks={repo.forks}
            language={repo.language}
            lastCommit={repo.pushed_at}
            license={repo.license?.name}
            openIssues={repo.open_issues}
            starred={repo.starred || false}
          />
        ))}
      </GridContainer>
    );
  };

  const renderList = () => {
    return (
      <ListContainer>
        {repositories.map(repo => (
          <RepoListItem
            id={repo.id}
            key={repo.id}
            name={repo.full_name}
            stars={repo.stargazers_count}
            age={repo.created_at}
            forks={repo.forks}
            language={repo.language}
            lastCommit={repo.pushed_at}
            license={repo.license?.name}
            openIssues={repo.open_issues}
            starred={repo.starred || false}
          />
        ))}
      </ListContainer>
    );
  };

  if (repositories.length === 0) {
    return <EmptyRepoList />;
  }

  return listType === 'grid' ? renderGrid() : renderList();
};

export default RepositoryList;
