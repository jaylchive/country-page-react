import Sidebar from '../ui/Sidebar';
import CountryList from '../features/CountryList';
import Header from '../ui/Header';

import styles from './Homepage.module.css';

function Homepage() {
  return (
    <div className={styles.homepage}>
      <Header />
      <Sidebar />
      <CountryList />
    </div>
  );
}

export default Homepage;
