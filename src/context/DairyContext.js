import createDataContext from "./CreateDataContext";
import jsonServer from "../api/JsonServer";

const dairyReduser = (state, action) => {
  switch (action.type) {
    case "get_dairyposts":
      return action.payload;
    case "edit_dairygpost":
      return state.map((dairyPost) => {
        return blogPost.id === action.payload.id ? action.payload : dairyPost;
      });
    case "delete_dairypost":
      return state.filter((dairyPost) => dairyPost.id !== action.payload);

    default:
      return state;
  }
};

const getDairyPost = dispatch => {
  return async () => {
    const response = await jsonServer.get("/dairyposts");
    dispatch({ type: "get_dairyposts", payload: response.data });
  };
};
const addDairyPost = dispatch => {
  return async (title, content, callback) => {
    await jsonServer.post("/dairyposts", { title, content });

    if (callback) {
      callback();
    }
  };
};

const deleteDairyPost = dispatch => {
  return async (id) => {
    await jsonServer.delete(`/dairyposts/${id}`);
    dispatch({ type: "delete_dairypost", payload: id });
  };
};
const editDairyPost = dispatch => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/dairyposts/${id}`, { title, content });
    dispatch({ type: "edit_dairypost", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  dairyReduser,
  { addDairyPost, deleteDairyPost, editDairyPost, getDairyPost },
  []
);
