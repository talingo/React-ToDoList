import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function ToDoForm(props: any) {
  const [input, setInput] = useState(props.edit ? props.edit.value:"");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.onSubmit({
      id: uuidv4(),
      text: input.trim()
    });
    setInput("");
  };
  const handleChange = (e: any) => {
    setInput(e.target.value);
  };
  return (
    <form className="toDo-form" onSubmit={handleSubmit} >
      {props.edit ? (
        <>
      
      <input
        onChange={handleChange} type="text" placeholder="Update your item" value={input} name="text" className="toDo-input"
      />
      <button className="toDo-button">Update</button>
      </>) : ( <>
      
      <input
        onChange={handleChange} type="text" placeholder="Add a to do" value={input} name="text" className="toDo-input"
      />
      <button className="toDo-button">Add something to do</button>
      </>

      )}
    </form>
  );
}
