import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage_Admin from "./pages/AdminPage/HomePage/HomePage"
import HomePage_GiangVien from "./pages/GiangVienPage/HomePage/HomePage"
import HomePage_Khoa from './pages/KhoaPage/HomePage/HomePage'
import { PrivateRoute } from "./components/PrivateRoute";
import Notfound from "./components/Notfound"
import "./App.css";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <PrivateRoute path="/Home_Admin" exact component={HomePage_Admin} />
          <PrivateRoute path="/Home_GiangVien" exact component={HomePage_GiangVien} />
          <PrivateRoute path="/Home_Khoa" exact component={HomePage_Khoa} />
          <Route>
            <Notfound/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
