import PropTypes from "prop-types";

function List(props) {
  const category = props.category;
  const itemList = props.items;
  // Sort fruits by name in ascending order
  // fruits.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical order
  // fruits.sort((a, b) => b.name.localeCompare(a.name));  // Reverse alphabetical order
  // fruits.sort((a, b) => a.calories - b.calories); // Numeric order
  // fruits.sort((a, b) => b.calories - a.calories); // Reverse numeric order

  // const lowCalorieFruits = fruits.filter((fruit) => fruit.calories < 100); // Filter fruits with less than 100 calories
  // const highCalorieFruits = fruits.filter((fruit) => fruit.calories < 100);
  const fruitItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name} : &nbsp;<b>{item.calories}</b>
    </li>
  ));
  return (
    <>
      <h3>{category}</h3>
      <ol> {fruitItems}</ol>
    </>
  );
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};
List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
