import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import data from "./data"

export default function App() {
  const content = data.map((item) => {
    return (
        <Card {...item} />
    )
  });
  return (
    <div>
      <Navbar />
      <section>{content}</section>
    </div>
  );
}
