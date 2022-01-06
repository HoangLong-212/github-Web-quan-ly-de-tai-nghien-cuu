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
import UserPage from "./pages/UserPage/UserPage";
import SearchLecturerPage from "./pages/SearchPage/SearchLecturerPage/SearchLecturerPage";
import SearchProjectPage from "./pages/SearchPage/SearchProjectPage/SearchProjectPage";

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
          <Route path="/User_Page"  exact component={UserPage} />
          <Route path="/Search_Lecturer_Page"  exact component={SearchLecturerPage} />
          <Route path="/Search_Project_Page"  exact component={SearchProjectPage} />
          <Route>
            <Notfound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
