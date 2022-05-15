import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
