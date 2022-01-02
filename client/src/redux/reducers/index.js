import { combineReducers } from "redux";
import Logins from './Logins';

import Posts from './Posts';
import modal from './modal';
import Projects from './Projects';
import Info from './Info';
import InfoModal from './InfoModal'
import Teams from './Teams'

export default combineReducers({
    Logins,
    Posts,
    modal,
    Projects,
    InfoModal,
    Info,
    Teams,
})



