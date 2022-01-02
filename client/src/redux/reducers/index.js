import { combineReducers } from "redux";
import Logins from './Logins';
import Posts from './Posts'
import modal from './modal'
import Info from './Info';
import InfoModal from './InfoModal'
import User from './User'
import UserModal from "./UserModal"
import Faculty from './Faculty'
import FacultyModal from "./FacultyModal"
import UpdateUserModal from "./UpdateUserModal"

export default combineReducers({
    Logins,
    Posts,
    modal,
    InfoModal,
    Info,
    User,
    UserModal,
    Faculty,
    FacultyModal,
    UpdateUserModal,
})


