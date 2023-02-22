import React from "react";

export function App() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div>
      <h1>SSR ElevenDing</h1>
      <span>{counter}</span>
      <button
        onClick={() => {
          setCounter((counter) => {
            return counter + 1;
          });
        }}
      >+1按钮</button>
    </div>
  );
}
