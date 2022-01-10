import LoginPage from "./pages/LoginPage/LoginPage";

import HomePage from "./pages/HomePage/HomePage";
import GVPage from "./pages/ExtendAndCancelPage/GVPage";
import KhoaAndAdminPage from "./pages/ExtendAndCancelPage/KhoaAndAdminPage";
import ProjectPage_GV from "./pages/GiangVienPage/ProjectPage/ProjectPage";
import Info_GiangVien from "./pages/GiangVienPage/InfoPage/InfoPage";
import { PrivateRoute } from "./components/PrivateRoute";
import Notfound from "./components/Notfound";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import PostPage from "./pages/PostPage/PostPage";

import React from "react";
import InfoProjectPage from "./pages/GiangVienPage/ProjectPage/InfoProjectPage";
import ExtendPage from "./pages/ExtendAndCancelPage/ExtendPage";
import CancelPage from "./pages/ExtendAndCancelPage/CancelPage";
import UserPage from "./pages/UserPage/UserPage";
import SearchLecturerPage from "./pages/SearchPage/SearchLecturerPage/SearchLecturerPage";
import SearchProjectPage from "./pages/SearchPage/SearchProjectPage/SearchProjectPage";
import CouncilPage from "./pages/CouncilPage/CouncilPage";
import ReportPage from "./pages/ReportPage/ReportPage";
import InfoReportPage from "./pages/ReportPage/InfoReportPage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <PrivateRoute path="/Home" exact component={HomePage} />
          <PrivateRoute path="/Project_GV" exact component={ProjectPage_GV} />

          <PrivateRoute
            path="/Info_GiangVien"
            exact
            component={Info_GiangVien}
          />

          <PrivateRoute path="/User_Page" exact component={UserPage} />
          <PrivateRoute
            path="/ExtendAndCancelPage_GV"
            exact
            component={GVPage}
          />
          <PrivateRoute
            path="/ExtendAndCancelPage"
            exact
            component={KhoaAndAdminPage}
          />

          <PrivateRoute path="/User_Page" exact component={UserPage} />
          <PrivateRoute
            path="/Search_Lecturer_Page"
            exact
            component={SearchLecturerPage}
          />
          <PrivateRoute
            path="/Search_Project_Page"
            exact
            component={SearchProjectPage}
          />
          <PrivateRoute path="/CouncilPage" exact component={CouncilPage} />
          <PrivateRoute path="/ReportPage" exact component={ReportPage} />
          <PrivateRoute
            path="/ReportPage/:id"
            exact
            component={InfoReportPage}
          />
          <PrivateRoute
            path="/Project_GV/:id"
            exact
            component={InfoProjectPage}
          />
          <PrivateRoute path="/ExtendPage/:id" exact component={ExtendPage} />
          <PrivateRoute path="/CancelPage/:id" exact component={CancelPage} />
          <PrivateRoute path="/Home/:id" exact component={PostPage} />
          <Route>
            <Notfound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
