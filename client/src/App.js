import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage_Admin from "./pages/AdminPage/HomePage/HomePage"
import HomePage_GiangVien from "./pages/GiangVienPage/HomePage/HomePage"
import HomePage_Khoa from './pages/KhoaPage/HomePage/HomePage'
import Info_GiangVien  from "./pages/GiangVienPage/InfoPage/InfoPage"
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
          <Route path="/Home_Admin" exact component={HomePage_Admin} />
          <Route path="/Home_GiangVien" exact component={HomePage_GiangVien} />
          <Route path="/Home_Khoa" exact component={HomePage_Khoa} />
          <Route path="/Info_GiangVien" exact component={Info_GiangVien} />
          <Route>
            <Notfound/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
