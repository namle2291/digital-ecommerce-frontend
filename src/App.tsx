import React from "react";
import "./App.scss";
import Home from "./pages/Home";
import DefaultLayout from "./layouts/Home/DefaultLayout";

function App() {
  return (
    <div className="App h-[1000px]">
      <DefaultLayout></DefaultLayout>
    </div>
  );
}

export default App;
