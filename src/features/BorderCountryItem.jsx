import styles from './BorderCountryItem.module.css';

function BorderCountryItem({ country }) {
  const { flags, name } = country;

  return (
    <div className={styles.item}>
      <img src={flags.svg} />
      <p>{name.common}</p>
    </div>
  );
}

export default BorderCountryItem;
