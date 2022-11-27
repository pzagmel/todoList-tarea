import React, { useState } from "react";

//create your first component
const Home = () => {
  const [tareas, setTareas] = useState([
    "Make the bed",
    "Eat",
    "Walk the dog",
    "pay the tax"
  ]);
  return (
    <div className="container">
      <h1> Todo List</h1>
      <ul>
        <li>
      <input
        placeholder="What needs to be done"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setTareas([...tareas, e.target.value]);
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
                setTareas(tareas.filter((value, i) => index != i))
              }
            ></i>
          </li>
        );
    })}
    <div className ="left"> {tareas.length} Item left </div>
      </ul>
    </div>
  );
};

export default Home;