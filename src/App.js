import "./App.css";
import TodoApp from "./components/TodoApp/TodoApp";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <TodoApp />
      </Layout>
    </div>
  );
}

export default App;
