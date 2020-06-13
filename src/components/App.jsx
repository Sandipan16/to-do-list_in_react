import React, { useState } from "react";
import InputArea from "./InputArea";
import TodoItems from "./TodoItems";

function App() {
  const [list, setList] = useState([]);

  function addItem(input) {
    setList(prevItems => {
      return [...prevItems, input];
    });
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
      <InputArea onAdd={addItem} />
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
