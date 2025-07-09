import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface todoState {
  value: string[];
}

export const initialState: todoState = {
  value: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      state.value.filter((item) => item !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;


