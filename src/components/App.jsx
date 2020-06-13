import React, { useState } from "react";
import TodoItems from "./TodoItems";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  function handleChange(event) {
    const newItem = event.target.value;
    setInput(newItem);
  }
  function handleClick() {
    setList(prevItems => {
      return [...prevItems, input];
    });
    setInput("");
  }

  function deleteItem(id) {
    setList(prevValue => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={input} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item, index) => (
            <TodoItems
              key={index}
              id={index}
              text={item}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
