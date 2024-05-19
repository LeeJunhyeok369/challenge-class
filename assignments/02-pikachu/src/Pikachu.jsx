import React from "react";
import PigkachuImg from "./assets/image/pikachu.png";

export default function Pikachu({ x, y, rotateY, translateY }) {
  console.log(x);
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
