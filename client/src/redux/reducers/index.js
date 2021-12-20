import { combineReducers } from "redux";
import Logins from './Logins';
import Posts from './Posts';
import modal from './modal';
import Projects from './Projects';

export default combineReducers({
    Logins,
    Posts,
    modal,
    Projects,
})