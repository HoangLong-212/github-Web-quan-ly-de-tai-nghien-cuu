import { INIT_STATE } from "../../constant";
import { getType, getProjects, createProjects, updateProjects } from "../actions";
import { messageError, messageSuccess } from "../../components/message";

export default function ProjectsReducers(state = INIT_STATE.Projects, action) {
  switch (action.type) {
    case getType(getProjects.getProjectsRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getProjects.getProjectsSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getProjects.getProjectsFailure):
      return {
        ...state,
        isLoading: false,
      };
    case getType(createProjects.createProjectsSuccess):
      messageSuccess("Gửi đề tài mới thành công");
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case getType(createProjects.createProjectsFailure):
      //messageError(action.payload);
      return {
        ...state,
        isLoading: true,
        data: [...state.data],
      };
      case getType(updateProjects.updateProjectsSuccess):    
     
      // messageSuccess("Chỉnh sửa thành công" );
      return {
        ...state,
        data: state.data.map((Projects) =>
        Projects._id === action.payload._id ? action.payload : Projects
        ),
      };
    case getType(updateProjects.updateProjectsFailure):
      // messageError(action.payload);
      
      return {
        ...state,
        isLoading: true,
        data: [...state.data],
      };

    default:
      return state;
  }
}
