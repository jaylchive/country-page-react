import { PAGE_SIZE } from '../utils/constants';

const URL = 'https://restcountries.com/v3.1';

export async function fetchCountries({ sort, regionAll, statusAll, query }) {
  const res = await fetch(`${URL}/all`);
  const data = await res.json();

  let filteredList = data;

  ////////////////////////////////////
  // SEARCH

  if (query) {
    filteredList = [];
    let filteredQueryValue;

    // //////////////////////
    // 1) Search by Name

    filteredQueryValue = data.filter(
      li => li.name.common.toLowerCase() === query
    );

    filteredList = [...filteredQueryValue, ...filteredList];

    // //////////////////////
    // 2) Search by Region

    filteredQueryValue = data.filter(li => li.region?.toLowerCase() === query);

    filteredList = [...filteredQueryValue, ...filteredList];

    // //////////////////////
    // 3) Search by Subregion

    filteredQueryValue = data.filter(
      li => li.subregion?.toLowerCase() === query
    );

    filteredList = [...filteredQueryValue, ...filteredList];
  }

  ////////////////////////////////////
  // SORT

  if (sort === 'population')
    filteredList = filteredList.sort((a, b) => b.population - a.population);

  if (sort === 'alphabetical')
    filteredList = filteredList.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );

  if (sort === 'area')
    filteredList = filteredList.sort((a, b) => b.area - a.area);

  ////////////////////////////////////
  // FILTER

  if (!regionAll.length) filteredList;

  if (regionAll.length) {
    let temp = [];

    for (const region of regionAll) {
      temp = [
        ...temp,
        ...filteredList.filter(
          li => li.region.toLowerCase() === region.toLowerCase()
        ),
      ];
    }

    filteredList = temp;
  }

  ////////////////////////////////////
  // STATUS

  if (!statusAll.length) filteredList;

  if (statusAll.includes('unMember')) {
    let temp = [];
    temp = [...temp, ...filteredList.filter(li => li.unMember)];

    filteredList = temp;
  }

  if (statusAll.includes('independent')) {
    let temp = [];
    temp = [...temp, ...filteredList.filter(li => li.independent)];

    filteredList = temp;
  }

  return filteredList;
}

export async function getCountries({
  sort,
  regionAll,
  statusAll,
  page,
  query,
}) {
  let data = await fetchCountries({ sort, regionAll, statusAll, query });

  ////////////////////////////////////
  // PAGE

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    data = data.slice(from, to);
  }

  return data;
}

export async function getCountry(country) {
  const res = await fetch(`${URL}/name/${country}`);
  const data = await res.json();

  const filteredList = data.filter(
    li => li.name.common.toLowerCase() === country
  );

  return filteredList;
}

export async function getBorderCountry(country) {
  let borderCountries = [];

  const res = await fetch(`${URL}/name/${country}`);
  const data = await res.json();

  if (!data) throw new Error('Failed to fetch the country data');

  const [{ borders }] = data.filter(
    li => li.name.common.toLowerCase() === country
  );

  if (!borders || !borders.length) return [];

  for (const border of borders) {
    const response = await fetch(`${URL}/alpha/${border?.toLowerCase()}`);
    const borderCountry = await response.json();

    borderCountries = [...borderCountries, ...borderCountry];
  }

  return borderCountries;
}

export async function getListSize({ sort, regionAll, statusAll, query }) {
  let data = await fetchCountries({ sort, regionAll, statusAll, query });
  return data.length;
}
