import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
        quantity: 1, 
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) todo.quantity +=1;
    },
    decreaseQuantity: (state, action) => {
      const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload);
      if (todoIndex !== -1) {
        if (state.todos[todoIndex].quantity > 1) {
          state.todos[todoIndex].quantity -=1;
        } else {
          state.todos.splice(todoIndex, 1);
        }
      }
    },
  },
});

export const { addTodo, deleteTodo, increaseQuantity, decreaseQuantity } = todoSlice.actions;
export default todoSlice.reducer;
