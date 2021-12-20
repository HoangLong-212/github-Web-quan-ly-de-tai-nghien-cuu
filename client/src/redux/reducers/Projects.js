import { INIT_STATE } from "../../constant";
import { getType, getProjects } from "../actions";

export default function ProjectsReducers(state = INIT_STATE.Projects, action) {
    switch (action.type) {
      case getType(getProjects.getProjectsRequest):
        return{
            ...state,
            isLoading: true,
        }
        case getType(getProjects.getProjectsSuccess):
        return{
            ...state,
            isLoading: false,
            data: action.payload,
        }
        case getType(getProjects.getProjectsFailure):
        return{
            ...state,
            isLoading: false,
        }
        
      default:
        return state;
    }
  }
  