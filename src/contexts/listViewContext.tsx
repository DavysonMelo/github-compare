import React, { createContext, useContext, useState } from 'react';

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

  return (
    <ListContext.Provider
      value={{
        listType,
        setListType,
        repositories,
        filterAndSort,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
