import React, { createContext, useContext, useEffect, useState } from 'react';
import sorts from '../utils/sortFunctions';
import filters from '../utils/filterFunctions';

const ListContext = createContext<ListContext>({} as ListContext);

export const useListContext = (): ListContext => {
  return useContext(ListContext);
};

export const ListContextProvider: React.FC = ({ children }) => {
  const [listType, setListType] = useState('grid');
  const [repositories, setRepositories] = useState([] as Repository[]);
  const [filterAndSort, setFilterAndSort] = useState<FilterAndSort>({
    repositories: [] as Repository[],
    type: '',
  });

  const onChangeFilter = (filter: Sort) => {
    const sortFunction = sorts[filter];
    setFilterAndSort({
      repositories: sortFunction(repositories),
      type: filter,
    });
  };

  useEffect(() => {
    setFilterAndSort({
      repositories,
      type: '',
    });
  }, [repositories]);

  const searchRepo = (key: string) => {
    if (key !== '') {
      const filterFunction = filters.search;
      setFilterAndSort({
        repositories: filterFunction(repositories, key),
        type: '',
      });
    } else {
      setFilterAndSort({
        repositories,
        type: '',
      });
    }
  };

  const toggleStarred = (id: number) => {
    const newRepositories = repositories.map(item => {
      const repo = { ...item };
      if (repo.id === id) {
        repo.starred = !repo.starred;
      }
      return repo;
    });
    setRepositories(newRepositories);
    const newFilteredRepos = filterAndSort.repositories.map(item => {
      const repo = { ...item };
      if (repo.id === id) {
        repo.starred = !repo.starred;
      }
      return repo;
    });
    setFilterAndSort({
      ...filterAndSort,
      repositories: newFilteredRepos,
    });
  };

  const filterStar = (starred: boolean) => {
    if (starred) {
      const filterFunction = filters.star;
      setFilterAndSort({
        repositories: filterFunction(repositories, starred),
        type: 'star',
      });
    } else {
      setFilterAndSort({
        repositories,
        type: '',
      });
    }
  };

  return (
    <ListContext.Provider
      value={{
        listType,
        setListType,
        repositories,
        filterAndSort,
        onChangeFilter,
        setRepositories,
        searchRepo,
        toggleStarred,
        filterStar,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
