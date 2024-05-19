import React from "react";
import greass from "./assets/image/grass.png";

export default function Grass() {
  return (
    <div className="w-[10vh] h-[10vh] ">
      <img className="w-full h-full object-cover" src={greass} alt="" />
    </div>
  );
}
