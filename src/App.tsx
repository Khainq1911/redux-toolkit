import "./App.css";
import CounterPage from "./pages/counter/counterPages";
import TodoPage from "./pages/todo/todoPage";

function App() {
  return (
    <div className="app">
      <CounterPage />
      <TodoPage />
    </div>
  );
}

export default App;
