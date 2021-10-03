import React, { createContext, useContext, useState } from 'react';

interface listView {
  listType: string;
  setListType(type: string): void;
}

const ListContext = createContext<listView>({} as listView);

export const useListContext = (): listView => {
  return useContext(ListContext);
};

export const ListContextProvider: React.FC = ({ children }) => {
  const [listType, setListType] = useState('grid');
  return (
    <ListContext.Provider
      value={{
        listType,
        setListType,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
