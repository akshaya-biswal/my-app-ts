import "./App.css";
// import User from "./components/User";
// import Message from "./components/Message";
// import { useState } from "react";
// import Count from "./components/Count";
import DocumentTitle from "./components/DocumentTitle";

const App = () => {
  // const [data, setData] = useState({ name: "", age: 0 });

  return (
    <div className="App">
      <h1>App</h1>
      <DocumentTitle />
      {/* <Message />
      <User data={data} setData={setData} /> */}
    </div>
  );
};

export default App;
