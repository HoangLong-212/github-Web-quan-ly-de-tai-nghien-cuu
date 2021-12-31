import LoginPage from "./pages/LoginPage/LoginPage";


import HomePage from "./pages/HomePage/HomePage";

import ProjectPage_GV from "./pages/GiangVienPage/ProjectPage/ProjectPage"
import Info_GiangVien  from "./pages/GiangVienPage/InfoPage/InfoPage"

import { PrivateRoute } from "./components/PrivateRoute";
import Notfound from "./components/Notfound";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import PostPage from "./pages/PostPage/PostPage";

import React from "react";
import InfoProjectPage from "./pages/GiangVienPage/ProjectPage/InfoProjectPage";

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/Home" exact component={HomePage} />
          <Route path="/Project_GV" exact component={ProjectPage_GV} />
          <Route path="/Home/:id"  exact component={PostPage} />
          <Route path="/Info_GiangVien" exact component={Info_GiangVien} />
          <Route path="/Project_GV/:id"  exact component={InfoProjectPage} />
          <Route>
            <Notfound/>
          </Route>
        </Switch>
      </Router>
      {/* <Router>
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
      </Router> */}
    </div>
  );
}

export default App;
