import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import styles from './Search.module.css';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(
    searchParams.get('search') ? searchParams.get('search') : ''
  );

  function handleInput(e) {
    const value = e.target.value;

    setQuery(value);

    searchParams.set('search', value);
    setSearchParams(searchParams);
  }

  return (
    <div className={styles.search}>
      <div className={styles.icon}>
        <img src="/Search.svg" />
      </div>
      <input
        type="text"
        name="search"
        value={query}
        onChange={handleInput}
        placeholder="Search by Name, Region, Subregion"
      />
    </div>
  );
}

export default Search;
