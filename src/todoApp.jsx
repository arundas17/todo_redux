import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, increaseQuantity, decreaseQuantity } from "./redux/slices/todoSlice";
import { useState } from "react";
import { Plus } from "lucide-react";

export const TodoApp = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const AddTodo = (event) => {
    event.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Todo App</h1>

       
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyUp={(e) => e.key === "Enter" && AddTodo(e)}
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

       
        <div>
          {todos.map((todo) => (
            <div key={todo.id} className="bg-white p-4 rounded-lg shadow mb-2 flex justify-between">
              {todo.text}

              <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatch(decreaseQuantity(todo.id))}
                  className="bg-red-400 px-3 py-1 text-white rounded-lg hover:bg-red-500 transition"
                >
                  -
                </button>
                <h1 className="text-xl mx-2">{todo.quantity}</h1>
                <button
                  onClick={() => dispatch(increaseQuantity(todo.id))}
                  className="bg-green-400 px-3 py-1 text-white rounded-lg hover:bg-green-500 transition"
                >
                  +
                </button>
              </div>
              <div>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
