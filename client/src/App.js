import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage_Admin from "./pages/AdminPage/HomePage/HomePage";
import HomePage_GiangVien from "./pages/GiangVienPage/HomePage/HomePage";
import HomePage_Khoa from "./pages/KhoaPage/HomePage/HomePage";
import { PrivateRoute } from "./components/PrivateRoute";
import Notfound from "./components/Notfound";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import HeaderBar from "./components/Header/HeaderBar/HeaderBar";

function App() {
  const { Header, Content, Footer } = Layout;

  return (
    <div>
      {/* <Router>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <PrivateRoute path="/Home_Admin" exact component={HomePage_Admin} />
          <Route path="/Home_GiangVien" exact component={HomePage_GiangVien} />
          <Route path="/Home_Khoa" exact component={HomePage_Khoa} />
          <Route>
            <Notfound/>
          </Route>
        </Switch>
      </Router> */}
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={LoginPage} />
            <Layout>
              <Header>
                <HeaderBar />
              </Header>
            </Layout>
            <PrivateRoute path="/Home_Admin" exact component={HomePage_Admin} />
            <PrivateRoute
              path="/Home_GiangVien"
              exact
              component={HomePage_GiangVien}
            />
            <PrivateRoute path="/Home_Khoa" exact component={HomePage_Khoa} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
