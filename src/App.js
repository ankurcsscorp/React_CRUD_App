import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CrudIndex from "./Components/index";
import Create from "./Components/Create";
import Edit from "./Components/Edit";

function App() {
  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>
      <hr />
      <Router>
        <Routes>
          <Route path="/" element={<CrudIndex />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
