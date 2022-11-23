import React, { useState } from "react";

//create your first component
const Home = () => {
  const [tareas, nueva] = useState([
    "Make the bed",
    "Eat",
    "Walk the dog",
  ]);
  const [input, setInput] = useState("");
  return (
    <div className="container">
      <h1> Todo List</h1>
      <ul>
        <li>
      <input
        placeholder="What needs to be done"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            nueva([...tareas, e.target.value]);
            e.target.value = "";
          }
        }}
      />
</li>
      {tareas.map((value, index) => {
        return (
          <li key={index}>
            {value}
            <i
              className="fas fa-times float-end my-1 mx-1"
              onClick={() =>
                nueva(tareas.filter((target, Index) => index != Index))
              }
            ></i>
          </li>
        );
    })}
    <div className ="left mx"> {tareas.length} Item left </div>
      </ul>
    </div>
  );
};

export default Home;