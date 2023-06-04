import FilterTodo from "./components/FilterTodo";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <NewTodo />
      <FilterTodo />
      <TodoList />
    </div>
  );
}

export default App;
