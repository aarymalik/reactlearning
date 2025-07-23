function List() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 95 },
    { id: 3, name: "banana", calories: 95 },
    { id: 4, name: "coconut", calories: 95 },
    { id: 5, name: "pineapple", calories: 95 },
  ];
  const fruitItems = fruits.map((fruit) => <li>{fruit.name}</li>);
  return <ol> {fruitItems}</ol>;
}
export default List;
