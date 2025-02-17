import "./App.css";
import User from "./components/User";
import Message from "./components/Message";

const App = () => {
  return (
    <div className="App">
      <h1>App</h1>
      <Message />
      <User />
    </div>
  );
};

export default App;
