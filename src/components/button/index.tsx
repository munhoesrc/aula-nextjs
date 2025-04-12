"use client";

import { useState } from "react";

export function Button() {
  const [name, setName] = useState("Sujeito Programador");

  function handleChangeName() {
    setName("Matheus Fraga");
  }

  return (
    <div>
      <button onClick={handleChangeName} className="cursor-pointer">
        Alterar Nome
      </button>
      <br />
      <h3>Nome: {name}</h3>
    </div>
  );
}
