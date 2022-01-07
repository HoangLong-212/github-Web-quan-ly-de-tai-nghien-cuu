import { combineReducers } from "redux";
import Logins from './Logins';
import Posts from './Posts';
import modal from './modal';
import Projects from './Projects';
import Info from './Info';
import InfoModal from './InfoModal'
import Teams from './Teams'
import User from './User'
import UserModal from "./UserModal"
import Faculty from './Faculty'
import FacultyModal from "./FacultyModal"
import UpdateUserModal from "./UpdateUserModal"
import Extends from "./Extends"
import Cancels from "./Cancels"
export default combineReducers({
    Logins,
    Posts,
    modal,
    Projects,
    InfoModal,
    Info,
    Teams,
    User,
    UserModal,
    Faculty,
    FacultyModal,
    UpdateUserModal,
    Extends,
    Cancels,
})





