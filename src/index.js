import React from "react";
import  ReactDOM from "react-dom/client";

import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import Card from "./components/cards/card";

const root = ReactDOM.createRoot(document.querySelector('.box'))

root.render(
  <React.StrictMode>
    <Navbar/>
    { Hero() }
    <Card/>
  </React.StrictMode>
)
