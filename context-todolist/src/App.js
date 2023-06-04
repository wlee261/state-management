import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <NewTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
