import logo from './logo.svg';
import './App.css';
import ShowHide from './useState/show-hide/ShowHide';
import Watcher from './useState/stopWatcher/Watcher';
import TodoList from './useState/todo-list/TodoList';

function App() {
  return (
    <div className="App">
      {/* <ShowHide></ShowHide> */}
      {/* <Watcher></Watcher> */}

      <TodoList></TodoList>


    </div>
  );
}

export default App;
