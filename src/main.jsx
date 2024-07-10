import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import GameCard from "./Card";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div id="header">
      <h1 id="title">Memory Card Game</h1>
      <div id="scoreDiv"></div>
      <div id="descript">
        <p>
          Get points by clicking on an image but don&apos;t click on any more
          than once!
        </p>
      </div>
    </div>
    <div id="gameContent">
      <GameCard URL='https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=' name="cat"/>
    </div>
  </React.StrictMode>
);
