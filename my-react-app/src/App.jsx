import Header from "./header.jsx";
import Student from "./student.jsx";
import Divider from "./divider.jsx";
import UserGreetings from "./UserGreetings.jsx";
import List from "./Mylist.jsx";
function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Orange", calories: 62 },
    { id: 3, name: "Banana", calories: 105 },
    { id: 4, name: "Coconut", calories: 283 },
    { id: 5, name: "Pineapple", calories: 50 },
  ];
  const vegetables = [
    { id: 6, name: "Potatos", calories: 77 },
    { id: 7, name: "Celery", calories: 16 },
    { id: 8, name: "Carrots", calories: 41 },
    { id: 9, name: "Corn", calories: 86 },
    { id: 10, name: "Brocolli", calories: 55 },
  ];

  return (
    <>
      <Header />
      <Student name="Arif Malik" age={26} isStudent={true} />
      <Student name="Tajamul Wani" age={25} isStudent={true} />
      <Student name="Zamin Zahoor" age={26} isStudent={false} />
      <Divider />
      <UserGreetings isLoggedin={true} username="Malik Arif ul Islam" />
      <Divider />
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && (
        <List items={vegetables} category="Vegetables" />
      )}
    </>
  );
}

export default App;
