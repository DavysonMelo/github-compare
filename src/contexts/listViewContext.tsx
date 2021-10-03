import React, { createContext, useContext, useEffect, useState } from 'react';

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

  const onChangeFilter = (filter: Sort) => {
    console.log('');
  };

  useEffect(() => {
    setFilterAndSort({
      repositories,
      type: '',
      searchKey: '',
    });
  }, [repositories]);

  return (
    <ListContext.Provider
      value={{
        listType,
        setListType,
        repositories,
        filterAndSort,
        onChangeFilter,
        setRepositories,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
