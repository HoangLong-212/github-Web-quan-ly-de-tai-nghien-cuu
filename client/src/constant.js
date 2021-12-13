export const BACKEND_URL = "http://localhost:5000";
export const FRONTEND_URL = "http://localhost:3000";

export const INIT_STATE = {
    Logins:{
        isLoading: false,
        isAuthenticated: false,
		user: null,
    },
    //region Info
    Info:{
        isLoading: false,
        data: [],
    },
    InfoModal: {
        isShow: false,
    },
    
}