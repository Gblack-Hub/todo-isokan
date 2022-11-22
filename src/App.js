import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    "Go to School",
    "Do the dishes",
    "Walk the dog.",
  ]);

  //receive the prop from the child component using a parameter.
  const getTheCollectedTodo = (collectedTodo) => {
    setTodos([...todos, collectedTodo]);
  };

  const removeTodo = (indexToBeRemoved) => {
    // logic to remove todo
  };

  return (
    <div className="App">
      <Header />
      <AddTodo getTodo={getTheCollectedTodo} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
