import "./App.css";
import Header from "./components/Header";
import User from "./components/User";
import UserList from "./components/UserList";

const u1 = {
  name: "ALex",
  age: 1000,
};

const userList = [
  {
    name: "ALex 2",
    age: 1000,
  },
  {
    name: "ALex 3",
    age: 1000,
  },
];

const App = () => {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Header name={"John Deo"} age={100} />
      <User user={u1} index={1000} />
      <UserList userList={userList} />
    </div>
  );
};

export default App;
