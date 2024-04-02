import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import FormRow from '../../ui/FormRow';

import styles from './Region.module.css';

function Region() {
  const [searchParams, setSearchParams] = useSearchParams();

  const regions = [
    'americas',
    'antarctic',
    'africa',
    'asia',
    'europe',
    'oceania',
  ];

  const [region, setRegion] = useState(regions);

  function handleRegion(reg) {
    setRegion(cur =>
      cur.includes(reg) ? cur.filter(val => val !== reg) : [...cur, reg]
    );

    function searchParamState() {
      let arr = [...region];
      arr = [
        arr.includes(reg) ? arr.filter(val => val !== reg) : [...arr, reg],
      ];
      return arr;
    }

    searchParams.set('region', searchParamState());
    setSearchParams(searchParams);
  }

  return (
    <FormRow label="Region">
      <div className={styles.region}>
        {regions.map(reg => (
          <button
            className={`${styles.btn} ${
              region.includes(reg) ? styles.active : ''
            }`}
            key={reg}
            onClick={() => handleRegion(reg)}
          >
            {reg}
          </button>
        ))}
      </div>
    </FormRow>
  );
}

export default Region;
