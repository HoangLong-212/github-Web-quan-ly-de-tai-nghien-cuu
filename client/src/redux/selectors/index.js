//Login
export const LoginsState$ =(state) => state.Logins.user;
export const LoginsState_isAuthenticated$ =(state) => state.Logins.isAuthenticated;


//Posts
export const PostState$ =(state) => state.Posts.data;
export const ModalState$ =(state) => state.modal;

//Projects
export const ProjectState$ =(state) => state.Projects.data;

//
export const TeamState$ =(state) => state.Teams.data;

export const InfoState$ = (state) => state.Info.data;
export const InfoModalState$ = (state) => state.InfoModal;

