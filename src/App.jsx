import './App.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { TodoApp } from './todoApp';
import { store } from './redux/store/store';




// App Component
function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;