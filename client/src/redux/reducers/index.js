import { combineReducers } from "redux";
import Logins from './Logins';
import Posts from './Posts'
import modal from './modal'

export default combineReducers({
    Logins,
    Posts,
    modal,
})