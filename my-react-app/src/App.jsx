import Header from "./header.jsx";
import Student from "./student.jsx";
import Divider from "./divider.jsx";
import UserGreetings from "./UserGreetings.jsx";
function App() {
  return (
    <>
      <Header />
      <Student name="Arif Malik" age={26} isStudent={true} />
      <Student name="Tajamul Wani" age={25} isStudent={true} />
      <Student name="Zamin Zahoor" age={26} isStudent={false} />
      <Divider />
      <UserGreetings isLoggedin={true} username="Malik Arif ul Islam" />
    </>
  );
}

export default App;
