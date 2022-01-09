export const BACKEND_URL = "http://localhost:5000";
export const FRONTEND_URL = "http://localhost:3000";

export const INIT_STATE = {
  Logins: {
    isLoading: false,
    isAuthenticated: false,
    user: null,
  },
  //Region User
  User:{
    isLoading: false,
    data: [],
},
  UserModal: {
      isShow: false,
  },

  Posts: {
    isLoading: false,
    data: [],
  },

  modal: {
    isShow: false,
  },

  Projects: {
    isLoading: false,
    data: [],
  },
  //region Info
  
  Info:{
    isLoading: false,
    data: [],
  },
  InfoModal: {
    isShow: false,
  },
  Teams:{
    isLoading: false,
    data: [],
  },
  Faculty:{
    isLoading: false,
    data: [],
  },
  FacultyModal: {
      isShow: false,
  },

  UpdateUserModal: {
    isShow: false,
  },
  Extends:{
    isLoading: false,
    data: [],
  },
  Cancels:{
    isLoading: false,
    data: [],
  },
  Councils:{
    isLoading: false,
    data: [],
  }
};
      


