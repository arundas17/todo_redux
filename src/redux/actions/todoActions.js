export const ADD_TODO = 'ADD_TODO';

// Action Creators
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});