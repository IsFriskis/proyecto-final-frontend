import { useState, useEffect } from 'react';
import './searchBar.scss';
import React from 'react';
import { GoSearch } from 'react-icons/go';
import { useDebounce } from 'usehooks-ts';

interface SearchBarProps {
  /**
   *
   * Function to search for input
   */
  onSearch: (searchTerm: string) => void;
}

const DELAY_TIME = 500;

export function SearchBar(props: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const { onSearch } = props;
  const searchDebounced = useDebounce<string>(searchTerm, DELAY_TIME);

  useEffect(() => {
    onSearch(searchDebounced);
  }, [searchDebounced]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-bar">
        <div className="search-bar__button-input">
          <button className="search-bar__button" type="submit">
            <GoSearch className="search-bar__icon" />
          </button>
          <input
            className="search-bar__input"
            type="text"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            placeholder="Search"
          ></input>
        </div>
      </div>
    </form>
  );
}
