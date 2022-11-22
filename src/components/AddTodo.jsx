import { useState } from "react";

const AddTodo = ({getTodo}) => {
  const [newTodo, setNewTodo] = useState("");

  const bamiChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleCreateTodo = () => {
    getTodo(newTodo);
  }

  return (
    <div>
      <input type="text" onChange={bamiChange} value={newTodo} />
      <button onClick={handleCreateTodo}>Add</button>
    </div>
  );
};

export default AddTodo;

// lifting the state up
// props
// children component
