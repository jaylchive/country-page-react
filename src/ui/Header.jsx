import Search from '../features/filters/Search';
import { useCountriesListSize } from '../services/useCountriesListSize';

import styles from './Header.module.css';

function Header() {
  const { listSize } = useCountriesListSize();

  return (
    <header className={styles.header}>
      <p className={styles.searchlist}>Found {listSize} countries</p>
      <Search />
    </header>
  );
}

export default Header;
