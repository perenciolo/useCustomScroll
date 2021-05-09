import React from "react";
import useCustomScroll from "./hooks/useCustomScroll";

export default function App() {
  const fieldRef = useCustomScroll();
  return (
    <div className="App field" ref={fieldRef}>
      Topo
      {new Array(50).fill(`A`).map((el, i) => (
        <div key={i}>{el + Math.floor(Math.random() * 5 + 5)}</div>
      ))}
    </div>
  );
}
