import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import GoodsGallery from "./components/GoodsGallery";

function App() {
  return (
    <div className="app-container">
      {/* Завдання 1 */}
      <Header />
      <Content />
      <Image />

      <hr className="task-divider" />

      {/* Завдання 2 */}
      <GoodsGallery />
    </div>
  );
}

export default App;