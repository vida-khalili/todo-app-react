import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TodoApp from "./components/TodoApp/TodoApp";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoApp />
      <Footer />
    </div>
  );
}

export default App;
