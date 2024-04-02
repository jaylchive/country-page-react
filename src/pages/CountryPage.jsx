import CountryRow from '../features/CountryRow';
import Counter from '../features/Counter';
import BorderCountriesList from '../features/BorderCountriesList';
import Loader from '../ui/Loader';

import { useCountry } from '../services/useCountry';

import styles from './CountryPage.module.css';

function CountryPage() {
  const { country, isLoading } = useCountry();

  if (isLoading) return <Loader />;

  const [
    {
      flags,
      name,
      capital,
      subregion,
      languages,
      currencies,
      continents,
      population,
      area,
    },
  ] = country;

  const { svg } = flags;

  const languageArr = Object.values(languages);
  const curr = Object.values(currencies);

  return (
    <div className={styles.countryPage}>
      <div>
        <img className={styles.flag} src={svg} />
        <div className={styles.titleSection}>
          <h1>{name.common}</h1>
          <p>{name.official}</p>
        </div>
        <div className={styles.counters}>
          <Counter label="Population" value={population} />
          <Counter label="Area (km²)" value={area} />
        </div>
        <CountryRow category="Capital" value={capital} />
        <CountryRow category="Subregion" value={subregion} />
        <CountryRow category="Language" value={languageArr.join(', ')} />
        <CountryRow category="Currencies" value={curr.at(0).name} />
        <CountryRow category="Continents" value={continents} />
        <BorderCountriesList />
      </div>
    </div>
  );
}

export default CountryPage;
