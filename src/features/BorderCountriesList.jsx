import BorderCountryItem from './BorderCountryItem';

import { useBorderCountry } from '../services/useBorderCountry';

import styles from './BorderCountriesList.module.css';

function BorderCountriesList() {
  const { borderCountries, isLoading } = useBorderCountry();

  if (isLoading) return null;

  return (
    <div className={styles.listWrap}>
      <p>Neighbouring Countries</p>
      <ul className={styles.list}>
        {borderCountries?.map(country => (
          <BorderCountryItem key={country.name.common} country={country} />
        ))}
      </ul>
    </div>
  );
}

export default BorderCountriesList;
