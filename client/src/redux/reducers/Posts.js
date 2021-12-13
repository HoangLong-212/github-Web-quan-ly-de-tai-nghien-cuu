import { INIT_STATE } from "../../constant";
import { createPosts, getPosts, getType, findPosts } from "../actions";

export default function PostsReducers(state = INIT_STATE.Posts, action) {
  switch (action.type) {
    case getType(getPosts.getPostsRequest):
      return{
          ...state,
          isLoading: true,
      }
      case getType(getPosts.getPostsSuccess):
      return{
          ...state,
          isLoading: false,
          data: action.payload,
      }
      case getType(getPosts.getPostsFailure):
      return{
          ...state,
          isLoading: false,
      }
      case getType(createPosts.createPostsSuccess):
      return {
        ...state,
        data: [...state.data, action.payload],
      };
      case getType(findPosts.findPostsRequest):
        console.log("[action Request]", action.payload);
      return{
          ...state,
          isLoading: true,
      }
      case getType(findPosts.findPostsSuccess):
        console.log("[action Success]", action.payload);
      return{
          ...state,
          isLoading: false,
          data: action.payload,
      }
      case getType(findPosts.findPostsFailure):
        console.log("[action F]", action.payload);
      return{
          ...state,
          isLoading: false,
      }
    default:
      return state;
  }
}
