import createDataContext from "./createDataContext";
//thay doi data
const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogPost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: `Blog Post #${state.length + 1}`,
        },
      ]; //luon luon tra ve mot doi tuong moi
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogPost" }); //truyeb vao trong dispatch phai luon la mot object
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
