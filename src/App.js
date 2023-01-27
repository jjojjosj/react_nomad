import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path={`${process.env.PUBLIC_URL}/movie/:id`}
          element={<Detail />}
        />
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
