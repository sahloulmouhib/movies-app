import {useState} from 'react';

import useDebounceText from '_hooks/useDebounceText';

import {DEBOUNCE_TIME} from '_utils/constants';

export interface UseSearchReturnType {
  setSearchText: (text: string) => void;
  searchText: string;
  debouncedSearchText: string;
}

export const useSearch = (defaultValue?: string): UseSearchReturnType => {
  const [searchText, setSearchText] = useState(defaultValue ?? '');
  const debouncedSearchText = useDebounceText(searchText, DEBOUNCE_TIME);
  return {
    setSearchText,
    searchText,
    debouncedSearchText: debouncedSearchText.toLocaleLowerCase().trim(),
  };
};
