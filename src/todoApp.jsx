import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo,deleteTodo } from "./redux/slices/todoSlice";
import { Plus } from "lucide-react";


export const TodoApp = () => {
    const todos = useSelector((state) => state.todo.todos); // Access `todos` from the `todo` slice
    
    const [newTodo, setNewTodo] = useState('');
    const dispatch = useDispatch();
  
    const AddTodo = (event) => {
      event.preventDefault();
      if (newTodo.trim()) {
        dispatch(addTodo(newTodo)); // Dispatch the ADD_TODO action
        setNewTodo(''); // Clear the input
      }
    };
  
    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Todo App</h1>
  
          {/* Input form */}
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyUp={(e) => e.key === 'Enter' && AddTodo(e)}
              placeholder="Add a new todo..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={AddTodo}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
  
          {/* Todo List */}
          <div >
            {todos && todos.map((todo) => (
              <div key={todo.id} className="bg-white p-4 rounded-lg shadow mb-2 flex justify-between">
                {todo.text}

                <div className="flex px-3">
                  <button className="bg-red-400 flex px-3">-</button>
                  <h1 className="text-xl mx-2">1</h1>
                  <button className="bg-green-400 flex px-3">+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };


  // thunk, saga, -> all those data layer opertions
  //  logger -> see all the console log.  