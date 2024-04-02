import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import FormRow from '../../ui/FormRow';

import styles from './Status.module.css';

function Status() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState([]);

  const statusList = [
    { id: 0, status: 'Member of the United Nations', param: 'unMember' },
    { id: 1, status: 'Independent', param: 'independent' },
  ];

  function handleStatus(param) {
    setStatus(cur =>
      cur.includes(param) ? cur.filter(val => val !== param) : [...cur, param]
    );

    function searchParamState() {
      let arr = [...status];
      arr = [
        arr.includes(param)
          ? arr.filter(val => val !== param)
          : [...arr, param],
      ];
      return arr;
    }

    searchParams.set('status', searchParamState());
    setSearchParams(searchParams);
  }

  return (
    <FormRow label="Status">
      {statusList.map(stat => (
        <button
          className={styles.checklist}
          key={stat.id}
          onClick={() => handleStatus(stat.param)}
        >
          <span
            className={`${styles.check} ${
              status.includes(stat.param) ? styles.active : ''
            }`}
          >
            {status.includes(stat.param) && <img src="/Done_round.svg" />}
          </span>
          <span>{stat.status}</span>
        </button>
      ))}
    </FormRow>
  );
}

export default Status;
