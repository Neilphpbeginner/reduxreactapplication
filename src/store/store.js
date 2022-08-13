import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";

// The configureStore function will automatically setup and empty store for you
// with the relevant settings you going to need futurer down the line.
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
