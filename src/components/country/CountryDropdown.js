import DataComponent from '../hoc/DataComponent.js';

const CountryNames = ({ data, selected="" }) =>
    <select className="dropdown" defaultValue={selected}>
        {data.map((country, i) =>
            <option key={i} value={country.name}>{country.name}</option>
        )}
    </select>

const CountryDropdown = DataComponent(
    CountryNames,
    'https://restcountries.eu/rest/v1/all'
);

export default CountryDropdown;