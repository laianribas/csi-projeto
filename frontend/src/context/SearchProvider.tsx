import React, { createContext, useState } from 'react';

interface SearchContextType {
  searchText: string;
  handleSearch: (value: string) => void;
}

export const SearchContext = createContext<SearchContextType>({
  searchText: '',
  handleSearch: () => { },
});

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  return (
    <SearchContext.Provider value={{ searchText, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
