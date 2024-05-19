import React, { useEffect, useState } from "react";
import "./App.css";
import Grass from "./Grass";
import Pikachu from "./Pikachu";

function App() {
  const grassComponents = Array.from({ length: 100 }, (_, index) => (
    <Grass key={index} />
  ));
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [eventCheck, setEventCheck] = useState(false);

  const handleKeyUp = (e) => {
    if (eventCheck) return;

    setEventCheck(true);

    switch (e.key) {
      case "ArrowUp":
        setY((prevY) => (prevY === 0 ? prevY : prevY - 10));
        break;
      case "ArrowDown":
        setY((prevY) => (prevY === 90 ? prevY : prevY + 10));
        break;
      case "ArrowLeft":
        setRotateY(180);
        setX((prevX) => (prevX === 0 ? prevX : prevX - 10));
        break;
      case "ArrowRight":
        setRotateY(0);
        setX((prevX) => (prevX === 90 ? prevX : prevX + 10));
        break;
      case " ":
        setTranslateY(-50);
        setTimeout(() => setTranslateY(0), 300);
        break;
      default:
        break;
    }

    setTimeout(() => setEventCheck(false), 100);
  };

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [eventCheck]);

  return (
    <div
      id="grass-box"
      className="relative w-[100vh] h-[100vh] flex items-center flex-wrap bg-black m-auto"
    >
      {grassComponents}
      <Pikachu x={x} y={y} rotateY={rotateY} translateY={translateY} />
    </div>
  );
}

export default App;
