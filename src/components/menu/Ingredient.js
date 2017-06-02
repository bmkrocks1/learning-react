const Ingredient = ({ amount, measurement, name }) =>
    <li>
        <span>{amount} {measurement} {name}</span>
    </li>

export default Ingredient;