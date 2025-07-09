import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../pages/counter/counterSlide";
import todoReducer from "../pages/todo/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
