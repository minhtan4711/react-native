import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";
//thay doi data
const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogPosts":
      return action.payload;
    // case "add_blogPost":
    //   return [
    //     ...state,
    //     {
    //       id: Math.floor(Math.random() * 999999),
    //       title: action.payload.title,
    //       content: action.payload.content,
    //     },
    //   ]; //luon luon tra ve mot doi tuong moi
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "edit_blogPost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogPosts");

    dispatch({ type: "get_blogPosts", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title, content })
    //get title and content from create screen component
    // dispatch({ type: "add_blogPost", payload: { title, content } }); //truyen vao trong dispatch phai luon la mot object
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogPosts/${id}`)

    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogPosts/${id}`, { title, content })

    dispatch({ type: "edit_blogPost", payload: { id, title, content } });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
  []
);
