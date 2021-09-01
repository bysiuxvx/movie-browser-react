import { configureStore } from "@reduxjs/toolkit";
// import movieSearchReducer from "../redux/reducers/movieSearch";
import movieListReducer from "./reducers/movieListSlice";
import modalDetailsReducer from "./reducers/modalDetailsSlice";
import movieSearchReducer from "./reducers/modalDetailsSlice";

export default configureStore({
  reducer: {
    movieSearch: movieSearchReducer,
    movieList: movieListReducer,
    modalDetails: modalDetailsReducer,
  },
});
