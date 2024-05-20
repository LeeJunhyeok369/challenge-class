import React, { useEffect, useState } from "react";
import PigkachuImg from "./assets/image/pikachu.png";

export default function Pikachu() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const handleKeyUp = (e) => {
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
  };

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div
      className={`w-[10%] h-[10%] absolute ease-linear duration-200`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `rotateY(${rotateY}deg) translateY(${translateY}px)`,
      }}
    >
      <img className="w-full h-full object-cover" src={PigkachuImg} alt="" />
    </div>
  );
}
