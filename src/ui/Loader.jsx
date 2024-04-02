import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.loader}>
      <svg viewBox="25 25 50 50">
        <circle r="20" cx="50" cy="50"></circle>
      </svg>
    </div>
  );
}

export default Loader;
