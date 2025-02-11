import { useState } from 'react';
import { Plus } from 'lucide-react';
import './App.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { TodoApp } from './todoApp';
import { store } from './redux/store/store';

// Action Types
// const ADD_TODO = 'ADD_TODO';

// // Action Creators
// const addTodo = (text) => ({
//   type: ADD_TODO,
//   payload: text,
// });


// Reducer
// const initialState = {
//   todos: [],
//   // 
// };

// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }],
//       };
//     default:
//       return state;
//   }
// };

// // Combine Reducers
// const rootReducer = combineReducers({
//   todo: todoReducer, // Use `todo` as the key
// });


// const store = createStore(
//   todoReducer
// );

// Create Store
// const store = createStore(
//   todoReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// TodoApp Component


// App Component
function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;