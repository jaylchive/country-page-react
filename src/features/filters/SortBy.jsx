import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import FormRow from '../../ui/FormRow';

import styles from './SortBy.module.css';

function SortBy() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [sortBy, setSortBy] = useState(() =>
    searchParams.get('sort') ? searchParams.get('sort') : 'population'
  );

  const [modal, setModal] = useState(false);

  const sort = ['population', 'alphabetical', 'area'];

  function handleSortBy(op) {
    setSortBy(op);

    searchParams.set('sort', op);
    setSearchParams(searchParams);
    setModal(false);
  }

  return (
    <FormRow label="Sort by">
      <button
        type="button"
        className={styles.btn}
        onClick={() => setModal(cur => !cur)}
      >
        <p className={styles.label}>{sortBy}</p>
        <span className={`${styles.icon} ${modal ? styles.active : ''}`}>
          <img src="/Expand_down.svg" />
        </span>
      </button>
      {modal && (
        <div className={styles.modal}>
          {sort
            .filter(op => op !== sortBy)
            .map(op => (
              <li key={op} onClick={() => handleSortBy(op)}>
                <button>{op}</button>
              </li>
            ))}
        </div>
      )}
    </FormRow>
  );
}

export default SortBy;
