import React, { createContext, useContext, useEffect, useState } from 'react';
import * as Api from '../api/repo';

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
    searchKey: '',
  });

  useEffect(() => {
    setFilterAndSort({
      repositories,
      type: '',
      searchKey: '',
    });
  }, [repositories]);

  const onChangeFilter = (filter: Sort) => {
    console.log('');
  };

  const getRepository = async (key: string) => {
    if (key.length === 0) {
      return false;
    }
    let newRepositories: Repository[];
    if (key.split('/').length > 1) {
      const response = await Api.getRepo(key);
      newRepositories = [...repositories, response];
    } else {
      const response = await Api.getUserRepos(key);
      newRepositories = [...repositories, ...response];
    }
    setRepositories(newRepositories);
    return true;
  };

  return (
    <ListContext.Provider
      value={{
        listType,
        setListType,
        repositories,
        filterAndSort,
        onChangeFilter,
        getRepository,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
