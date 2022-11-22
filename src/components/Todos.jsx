//accept the transferred prop from the parent component App.js using the object destructuring.

export default function Todos({ todos }) {
  const handleRemove = (ind) => {
    
  };
  return (
    <div>
      {todos.map((todo, index) => (
        <section key={index}>
          {todo} <button onClick={(e) => handleRemove(index)}>Remove</button>
        </section>
      ))}
    </div>
  );
}
