import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { ReturnLogin } from "./components/ReturnLogin";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/app/login" element={<Login />}></Route>
        <Route exact path="/app/home" element={<Home />}></Route>
        <Route exact path="/app/returnlogin" element={<ReturnLogin />}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
