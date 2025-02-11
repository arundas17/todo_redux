import { ADD_TODO } from "../actions/todoActions";

const initialState = {
    todos: [],
    // 
  };
  
 export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }],
        };
      default:
        return state;
    }
  };