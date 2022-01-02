import { INIT_STATE } from "../../constant";
import { getType, getTeams, createTeams } from "../actions";

export default function ProjectsReducers(state = INIT_STATE.Teams, action) {
  switch (action.type) {
    case getType(getTeams.getTeamsRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getTeams.getTeamsSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getTeams.getTeamsFailure):
      return {
        ...state,
        isLoading: false,
      };
    case getType(createTeams.createTeamsSuccess):    
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case getType(createTeams.createTeamsFailure):
      return {
        ...state,
        isLoading: true,
        data: [...state.data],
      };

    default:
      return state;
  }
}
