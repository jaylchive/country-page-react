import styles from './CountryRow.module.css';

function CountryRow({ category, value }) {
  return (
    <div className={styles.countryRow}>
      <p>{category}</p>
      <p>{value}</p>
    </div>
  );
}

export default CountryRow;
