import SortBy from '../features/filters/SortBy';
import Region from '../features/filters/Region';
import Status from '../features/filters/Status';

import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <SortBy />
      <Region />
      <Status />
    </aside>
  );
}

export default Sidebar;
