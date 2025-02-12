// import { ADD_TODO } from "../actions/todoActions";

// const initialState = {
//     todos: [],
//     // 
//   };
  
//  export const todoReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case ADD_TODO:
//         return {
//           ...state,
//           todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }],
//         };
//       default:
//         return state;
//     }
//   };


// import { createStore } from "redux";
// import { rootReducer } from "../reducers/combineReducer";
import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name:'todos',
  initialState:{
    todos:[]
  },
  reducers:{
    addTodo:(state, action) => {
            state.todos.push({
              id: Date.now(),
              text: action.payload,
              completed: false
            })        
  },
}})
export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer
