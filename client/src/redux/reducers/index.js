import { combineReducers } from "redux";
import Logins from './Logins';
import Info from './Info';
import InfoModal from './InfoModal'

export default combineReducers({
    Logins, 
    InfoModal,
    Info,
});
