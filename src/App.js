import React from "react";
import "./styles.css";

const ingredients = ["Yazzen", "Rayyan", "Said", "Joumana", "Ali"];

export default function App() {
  return (
    <div className="App">
      <ol>
        {ingredients.map(function (ingredients) {
          return <li>{ingredients}</li>;
        })}
      </ol>
    </div>
  );
}
