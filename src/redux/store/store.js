import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../slices/todoSlice";
import logger from "redux-logger";


// const customMiddleware = (store) => (next) => (action) => {
//   console.log('Custom Middleware: Dispatching action', action);
//   return next(action);
// };
// const [state,dispatch] = useReducer(initalState)

const customMiddleware = (store) =>(next) => (action) => {
  // add your logic of middleware
  console.log("state of todos",store.getState())
  console.log("action  of todos",action.payload)

  //  
  if(action.type == 'todos/deleteTodo'){
    fetch('https://backendsever.com/api/log',{
      method:'POST',
      body:JSON.stringify(action.payload)
    })
  }

  return next(action)
} 

// const mutiplyBy2 = (b)=> 2*b   
// const mutiplyBy10 = (b)=> 10*b   


export const store = configureStore({
  reducer:{
    todo:todoReducers,
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(customMiddleware)

  // middleware:(getDefaultMiddleware)=>
  //   getDefaultMiddleware().concat(logger)
  // .concat(customMiddleware), // Add custom middleware

});

