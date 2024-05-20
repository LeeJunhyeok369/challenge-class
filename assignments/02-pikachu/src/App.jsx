import React, { useMemo } from "react";
import "./App.css";
import Grass from "./Grass";
import Pikachu from "./Pikachu";

function App() {
  const grassComponents = useMemo(() => {
    return Array.from({ length: 100 }, (_, index) => <Grass key={index} />);
  }, []);

  return (
    <div
      id="grass-box"
      className="relative w-[100vh] h-[100vh] flex items-center flex-wrap bg-black m-auto"
    >
      {grassComponents}
      <Pikachu />
    </div>
  );
}

export default App;
