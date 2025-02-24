import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostList from "./PostList";
import PostDetails from "./components/PostDetails";

const NotFound = () => <h2>Not Found 404</h2>;

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
      </nav>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
