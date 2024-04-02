import styles from './Counter.module.css';

function Counter({ label, value }) {
  return (
    <div className={styles.counter}>
      <p>{label}</p>
      <p>{value.toLocaleString()}</p>
    </div>
  );
}

export default Counter;
