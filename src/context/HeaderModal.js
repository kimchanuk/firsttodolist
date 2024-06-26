import { createContext, useState } from 'react';

export const HeaderModalContext = createContext();

export const HeaderModalContextProvider = ({ children }) => {
  const changeHeader = data => {
    setHeaderTap(data);
  };

  const headerTaps = ['all', 'active', 'completed'];
  const [headerTap, setHeaderTap] = useState(headerTaps[0]);
  const [nameInput, setNameInput] = useState('');
  const [headerTitle, setHeaderTitle] = useState(null);
  const [headerModal, setHeaderModal] = useState(false);
  const headerModalHandler = () => {
    setHeaderModal(prev => !prev);
  };

  const [searchInit, setSearchInit] = useState('');

  const getFilteredItem = (todoItem, filterItem) => {
    if (searchInit) {
      if (searchInit === '') {
        return todoItem;
      }
      return todoItem.filter(t => t.text.includes(searchInit));
      ////
    } else if (filterItem) {
      if (filterItem === 'all') {
        return todoItem;
      }
      return todoItem.filter(t => t.status === filterItem);
    }
  };

  return (
    <HeaderModalContext.Provider
      value={{
        headerModal,
        setHeaderModal,
        headerModalHandler,
        nameInput,
        setNameInput,
        headerTitle,
        setHeaderTitle,
        headerTaps,
        changeHeader,
        headerTap,
        getFilteredItem,
        searchInit,
        setSearchInit,
        setHeaderTap,
      }}
    >
      {children}
    </HeaderModalContext.Provider>
  );
};
