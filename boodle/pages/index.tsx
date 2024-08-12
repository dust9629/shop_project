// pages/index.tsx
import React, { useState } from "react";

function HomePage() {
  const [message, setMessage] = useState("Welcome to My Next.js App!");

  function handleClick() {
    setMessage("Button clicked! The message has changed.");
  }

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Click me to change the message!</button>
    </div>
  );
}

export default HomePage;
