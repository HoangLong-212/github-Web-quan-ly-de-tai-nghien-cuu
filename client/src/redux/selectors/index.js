//Login
export const LoginsState$ =(state) => state.Logins.user;
export const LoginsState_isAuthenticated$ =(state) => state.Logins.isAuthenticated;


//Posts
export const PostState$ =(state) => state.Posts.data;
export const ModalState$ =(state) => state.modal;

//Projects
export const ProjectState$ =(state) => state.Projects.data;

//Team
export const TeamState$ =(state) => state.Teams.data;

export const InfoState$ = (state) => state.Info.data;
export const InfoModalState$ = (state) => state.InfoModal;

export const UserState$ = (state) => state.User.data;
export const UserModalState$ = (state) => state.UserModal;

export const FacultyState$ = (state) => state.Faculty.data;
export const FacultyModalState$ = (state) => state.FacultyModal;

export const UpdateUserModalState$ = (state) => state.UpdateUserModal;

//Extend
export const ExtendsState$ =(state) => state.Extends.data;
//Cancel
export const CancelsState$ =(state) => state.Cancels.data;
//Council
export const CouncilsState$ =(state) => state.Councils.data;
//Report
export const ReportsState$ =(state) => state.Reports.data;