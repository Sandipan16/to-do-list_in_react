import React, { useState } from "react";

export default function InputArea(props) {
  const [input, setInput] = useState("");
  function handleChange(event) {
    const newItem = event.target.value;
    setInput(newItem);
  }

  return (
    <div className="form">
      <input type="text" onChange={handleChange} value={input} />
      <button
        onClick={() => {
          props.onAdd(input);
          setInput("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
