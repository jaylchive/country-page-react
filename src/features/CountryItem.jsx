import { Link } from 'react-router-dom';

import styles from './CountryItem.module.css';

function CountryItem({ country }) {
  const { name, flags, population, area, region } = country;

  const { common } = name;
  const { svg } = flags;

  return (
    <li className={styles.item}>
      <Link to={`/${common.toLowerCase()}`}>
        <img className={styles.flag} src={svg} />
      </Link>
      <Link to={`/${common.toLowerCase()}`}>
        <h2 className={styles.country}>{common}</h2>
      </Link>
      <span>{population.toLocaleString()}</span>
      <span>{area.toLocaleString()}</span>
      <span>{region}</span>
    </li>
  );
}

export default CountryItem;
